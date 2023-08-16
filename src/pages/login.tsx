import LoginTemplate from '../templates/LoginTemplate';

export default function LoginPage() {
  return <LoginTemplate />;
}

export async function getStaticProps() {
  return {
    props: {
      children: 'React',
    },
  };
}
