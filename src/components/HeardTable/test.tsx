import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import HeardTable, { HeardTableProps } from '.';

const props: HeardTableProps = {
  children: 'any',
};

describe('<HeardTable />', () => {
  it('should render', () => {
    renderTheme(<HeardTable {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
