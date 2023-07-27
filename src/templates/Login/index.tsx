import Button from '../../components/Button';
import TextField from '../../components/TextField';
import * as Styled from './styles';

export type LoginTemplateProps = {
  children?: string;
};

const Login = ({ children }: LoginTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Box>
        <TextField name="Email" display="column" />
        <TextField name="Password" display="column" />
        <Styled.BoxButton>
          <Button color="white" bgcolor="green">
            Login
          </Button>
          <Button color="white" bgcolor="red">
            Cancel
          </Button>
        </Styled.BoxButton>
      </Styled.Box>
    </Styled.Wrapper>
  );
};

export default Login;
