import * as Styled from './styles';

export type TitleProps = {
  children?: string;
};

const Title = ({ children }: TitleProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Title;
