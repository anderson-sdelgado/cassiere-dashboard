import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import PaginateTable from '.';

describe('<PaginateTable />', () => {
  it('should render', () => {
    renderTheme(<PaginateTable />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
