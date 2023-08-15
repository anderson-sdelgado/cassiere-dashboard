import Login from '../templates/Login';

export default function LoginPage() {
  return <Login />;
}

export async function getStaticProps() {
  return {
    props: {
      children: 'React',
    },
  };
}
