import * as Styled from './styles';

export type FileFieldProps = {
  name: string;
};

const FileField = ({ name }: FileFieldProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>
        {name[0].toUpperCase() + name.substring(1)}:
      </Styled.Label>
      <Styled.Input type="file" id={name} name={name} />
      <Styled.Image src="img/ninho.jpg" />
    </Styled.Wrapper>
  );
};

export default FileField;
