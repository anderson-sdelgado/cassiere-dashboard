import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Maintenance from '.';

describe('<Maintenance />', () => {
  it('should render', () => {
    renderTheme(<Maintenance title="Teste" />);
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });
});
