import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Login from '.';

describe('<Login />', () => {
  it('should render', () => {
    renderTheme(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
