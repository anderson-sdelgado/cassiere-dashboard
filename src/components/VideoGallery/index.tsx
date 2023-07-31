import * as Styled from './styles';

import mock from './mock';
import Video from '../Video';

export type VideoGalleryProps = {
  children?: string;
};

const VideoGallery = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperInput>
        <Styled.Label>Images (jpg/gif)</Styled.Label>
        <Styled.Input type="file" />
      </Styled.WrapperInput>
      <Styled.WrapperGallery>
        {mock.map((img, index) => (
          <Video key={index} src={img.src} />
        ))}
      </Styled.WrapperGallery>
    </Styled.Wrapper>
  );
};

export default VideoGallery;
