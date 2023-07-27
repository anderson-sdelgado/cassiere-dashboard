import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import PaginateTable, { PaginateTableProps } from '.';

const props: PaginateTableProps = {
  children: 'any',
};

describe('<PaginateTable />', () => {
  it('should render', () => {
    renderTheme(<PaginateTable {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
