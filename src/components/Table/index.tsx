import HeardTable from '../HeardTable';
import RowTable from '../RowTable';
import * as Styled from './styles';

import rowMock from './rowMock';

const Table = () => {
  return (
    <Styled.TableWrapper>
      <HeardTable titles={Object.keys(rowMock[1])} />
      <tbody>
        {rowMock.map((row) => (
          <RowTable
            key={row.id}
            keys={Object.keys(row)}
            values={Object.values(row)}
          />
        ))}
      </tbody>
    </Styled.TableWrapper>
  );
};

export default Table;
