import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import RowTable, { RowTableProps } from '.';

const props: RowTableProps = {
  children: 'any',
};

describe('<RowTable />', () => {
  it('should render', () => {
    renderTheme(<RowTable {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
