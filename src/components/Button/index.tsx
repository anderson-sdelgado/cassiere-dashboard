import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  bgColor?: 'red' | 'blue' | 'yellow' | 'white' | 'green';
  ftColor?: 'white' | 'black';
  icon?: JSX.Element;
  children?: string;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  icon,
  bgColor = 'green',
  ftColor = 'white',
  ...props
}: ButtonProps) => {
  return (
    <Styled.Wrapper
      hasIcon={!!icon}
      bgColor={bgColor}
      ftColor={ftColor}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </Styled.Wrapper>
  );
};

export default Button;
