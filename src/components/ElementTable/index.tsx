import * as Styled from './styles';

export type ElementTableProps = {
  children?: string;
  type?: 'id' | 'img' | 'regular';
};

const ElementTable = ({ children, type = 'regular' }: ElementTableProps) => {
  return (
    <Styled.ElementWrapper type={type}>
      {type === 'img' && <img src={children} />}
      {type !== 'img' && children}
    </Styled.ElementWrapper>
  );
};

export default ElementTable;
