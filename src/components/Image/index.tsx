import Button from '../Button';
import * as Styled from './styles';

export type ImageProps = {
  src: string;
};

const Image = ({ src }: ImageProps) => {
  return (
    <Styled.Wrapper>
      <Button color="white" bgcolor="red">
        Excluir
      </Button>
      <Styled.Image src={src} />
    </Styled.Wrapper>
  );
};

export default Image;
