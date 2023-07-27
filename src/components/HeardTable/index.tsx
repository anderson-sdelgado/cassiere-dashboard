import * as Styled from './styles';

export type HeardTableProps = {
  titles: string[];
};

const HeardTable = ({ titles }: HeardTableProps) => {
  return (
    <thead>
      <Styled.RowWrapper key={0}>
        {titles.map((title) => (
          <Styled.ElementWrapper key={title}>{title}</Styled.ElementWrapper>
        ))}
      </Styled.RowWrapper>
    </thead>
  );
};

export default HeardTable;
