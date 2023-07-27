import Login, { LoginTemplateProps } from '../templates/Login';

export default function LoginPage(props: LoginTemplateProps) {
  return <Login {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      children: 'React',
    },
  };
}
