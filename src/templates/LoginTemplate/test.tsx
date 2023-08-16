import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import LoginTemplate from '.';

describe('<Login />', () => {
  it('should render', () => {
    renderTheme(<LoginTemplate />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
