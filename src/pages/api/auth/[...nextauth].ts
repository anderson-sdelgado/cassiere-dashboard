/* eslint-disable prettier/prettier */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { gqlClient } from '../../../graphql/client';
import { GQL_MUTATION_AUTHENTICATE_USER } from '../../../graphql/mutations/auth';

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email or username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('CREDENTIALS', credentials);
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const { login } = await gqlClient.request(
            GQL_MUTATION_AUTHENTICATE_USER,
            {
              email: credentials.email,
              password: credentials.password,
            },
          );

          if (!login) {
            throw new Error('No login');
          }

          const { jwt, user } = login;
          const { id, username, email } = user;

          if (!jwt || !id || !username || !email) {
            return null;
          }

          return {
            jwt,
            id,
            name: username,
            email,
          };
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('TOKEN', token);
      console.log('USER', user);
      const isSignIn = !!user;
      if (isSignIn) {
        if (!user || !user.jwt || !user.name || !user.email) {
          return {};
        }

        token.jwt = user.jwt;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      console.log('SESSION', session);
      console.log('TOKEN', token);
      if (!token.jwt || !token.id || !token.name || !token.email) {
        return null;
      }

      session.accessToken = token.jwt;
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
      };
      return session;
    },
  },
});
