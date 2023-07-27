import * as Styled from './styles';

export type TextFieldProps = {
  name: string;
  display?: 'inline' | 'column';
};

const TextField = ({ name, display = 'inline' }: TextFieldProps) => {
  return (
    <Styled.Wrapper display={display}>
      <Styled.Label htmlFor={name}>
        {name[0].toUpperCase() + name.substring(1)}:
      </Styled.Label>
      <Styled.Input type="text" id={name} name={name} />
    </Styled.Wrapper>
  );
};

export default TextField;
