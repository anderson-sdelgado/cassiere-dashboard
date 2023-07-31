import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import TextField from '.';

describe('<TextField />', () => {
  it('should render', () => {
    renderTheme(<TextField name="title" />);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });

  it('should render column', () => {
    renderTheme(<TextField name="title" display="column" />);
    expect(screen.getByRole('textbox').parentElement).toHaveStyle({
      display: 'flex',
    });
  });
});
