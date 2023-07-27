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
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </Styled.Wrapper>
  );
};

export default AreaField;
