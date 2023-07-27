import Button from '../Button';
import * as Styled from './styles';
import { Player } from 'video-react';

export type VideoProps = {
  src: string;
};

const Video = ({ src }: VideoProps) => {
  return (
    <Styled.Wrapper>
      <Button color="white" bgcolor="red">
        Excluir
      </Button>
      <Player playsInline src={src} />
    </Styled.Wrapper>
  );
};

export default Video;
