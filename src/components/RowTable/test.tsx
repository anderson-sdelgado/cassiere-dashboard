import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import RowTable from '.';

import rowMock from '../Table/rowMock';

describe('<RowTable />', () => {
  it('should render', () => {
    renderTheme(
      <RowTable
        titles={Object.keys(rowMock[0])}
        values={Object.values(rowMock[0])}
      />,
    );
    expect(screen.getByText(/kit/i)).toBeInTheDocument();
  });
});
