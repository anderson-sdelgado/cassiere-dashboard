import * as Styled from './styles';

export type HeaderRelationProps = {
  children?: string;
};

const HeaderRelation = ({ children }: HeaderRelationProps) => {
  return (
    <Styled.Wrapper>
      <p>{children}</p>
    </Styled.Wrapper>
  );
};

export default HeaderRelation;
