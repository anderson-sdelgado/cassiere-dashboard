import { screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import TextField from '.';
import userEvent from '@testing-library/user-event';

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

  it('Changes its value when typing', async () => {
    const onInput = jest.fn();
    renderTheme(<TextField onInput={onInput} name="TextField" />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(19);
      expect(onInput).toHaveBeenCalled();
      expect(onInput).toHaveBeenCalledWith({ type: 'input' });
    });
  });
});
