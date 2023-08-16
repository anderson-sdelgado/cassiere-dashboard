import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import * as Styled from './styles';

const LoginTemplate = () => {
  const [values, setValues] = useState({});
  const { push } = useRouter();

  const handleInput = (fields: string, value: string) => {
    setValues((s) => ({ ...s, [fields]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/',
    });

    if (result?.url) {
      return push(result?.url);
    }

    console.error('email ou senha inválida');
  };

  return (
    <Styled.Wrapper>
      <Styled.Box onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          display="column"
          onInputChange={(v) => handleInput('email', v)}
        />
        <TextField
          type="password"
          name="password"
          display="column"
          onInputChange={(v) => handleInput('password', v)}
        />
        <Styled.BoxButton>
          <Button ftColor="white" bgColor="green">
            Login
          </Button>
          <Button ftColor="white" bgColor="red">
            Cancel
          </Button>
        </Styled.BoxButton>
      </Styled.Box>
    </Styled.Wrapper>
  );
};

export default LoginTemplate;
