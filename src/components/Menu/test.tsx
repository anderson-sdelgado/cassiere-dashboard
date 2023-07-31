import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Menu from '.';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
