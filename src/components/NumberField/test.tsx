import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import NumberField from '.';

describe('<NumberField />', () => {
  it('should render', () => {
    renderTheme(<NumberField name="Preço" />);
    expect(screen.getByText(/preço/i)).toBeInTheDocument();
  });

  it('should render number', () => {
    const onInput = jest.fn();
    renderTheme(<NumberField onInput={onInput} name="Preco" />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input).toHaveValue('123');
  });

  it('should render decimal', () => {
    const onInput = jest.fn();
    renderTheme(
      <NumberField onInput={onInput} name="Preco" type="percentage" />,
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1234' } });
    expect(input).toHaveValue('12,34');
  });

  it('should render price', () => {
    const onInput = jest.fn();
    renderTheme(<NumberField onInput={onInput} name="Preco" type="price" />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1234' } });
    expect(input).toHaveValue('R$ 12,34');
  });
});
