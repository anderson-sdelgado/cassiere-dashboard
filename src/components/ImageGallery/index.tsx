import * as Styled from './styles';

import mock from './mock';
import Image from '../Image';

const ImageGallery = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperInput>
        <Styled.Label>Images (jpg/gif)</Styled.Label>
        <Styled.Input type="file" />
      </Styled.WrapperInput>
      <Styled.WrapperGallery>
        {mock.map((img, index) => (
          <Image key={index} src={img.src} />
        ))}
      </Styled.WrapperGallery>
    </Styled.Wrapper>
  );
};

export default ImageGallery;
