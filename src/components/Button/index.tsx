import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  icon?: JSX.Element;
} & ButtonTypes;

const Button = ({ children, icon }: ButtonProps) => {
  return (
    <Styled.Wrapper hasIcon={!!icon}>
      {icon}
      {!!children && <span>{children}</span>}
    </Styled.Wrapper>
  );
};

export default Button;
