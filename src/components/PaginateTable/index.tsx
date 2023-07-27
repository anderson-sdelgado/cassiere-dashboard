import * as Styled from './styles';

export type PaginateTableProps = {
  children?: string;
};

const PaginateTable = () => {
  return (
    <Styled.Wrapper>
      <Styled.ElementWrapper>{'<<'}</Styled.ElementWrapper>
      <Styled.ElementWrapper>{'<'}</Styled.ElementWrapper>
      <Styled.ElementWrapper>1</Styled.ElementWrapper>
      <Styled.ElementWrapper>{'>'}</Styled.ElementWrapper>
      <Styled.ElementWrapper>{'>>'}</Styled.ElementWrapper>
    </Styled.Wrapper>
  );
};

export default PaginateTable;
