import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as Styled from './styles';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export type AreaFieldProps = {
  name: string;
};

const AreaField = ({ name }: AreaFieldProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Label>{name[0].toUpperCase() + name.substring(1)}:</Styled.Label>
      <CKEditor editor={ClassicEditor} />
    </Styled.Wrapper>
  );
};

export default AreaField;
