import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Table, { TableProps } from '.';

const props: TableProps = {
  children: 'any',
};

describe('<Table />', () => {
  it('should render', () => {
    renderTheme(<Table {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
