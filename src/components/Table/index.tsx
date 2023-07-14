import RowTable from '../RowTable';
import * as Styled from './styles';

const Table = () => {
  return (
    <Styled.TableWrapper>
      <RowTable />
      <RowTable />
    </Styled.TableWrapper>
  );
};

export default Table;
