import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Home from '.';

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home />);
    expect(screen.getByText(/inserir/i)).toBeInTheDocument();
  });
});
