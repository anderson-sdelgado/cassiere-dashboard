import Home, { HomeTemplateProps } from '../templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      children: 'React',
    },
  };
}
