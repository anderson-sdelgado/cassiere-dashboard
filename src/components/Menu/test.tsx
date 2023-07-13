import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Menu, { MenuProps } from '.';

const props: MenuProps = {
  children: 'any',
};

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
