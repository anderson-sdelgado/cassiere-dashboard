import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  bgcolor: 'red' | 'blue' | 'yellow' | 'white' | 'green';
  color: 'white' | 'black';
  icon?: JSX.Element;
  children?: string;
} & ButtonTypes;

const Button = ({ children, icon, bgcolor, color }: ButtonProps) => {
  return (
    <Styled.Wrapper hasIcon={!!icon} bgcolor={bgcolor} color={color}>
      {icon}
      {!!children && <span>{children}</span>}
    </Styled.Wrapper>
  );
};

export default Button;
