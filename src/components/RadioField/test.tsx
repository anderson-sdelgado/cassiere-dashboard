import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import RadioField from '.';

describe('<RadioField />', () => {
  it('should render', () => {
    renderTheme(<RadioField label="Teste" />);
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });

  it('should render event', () => {
    const onCheck = jest.fn();

    renderTheme(
      <RadioField label="Radio" labelFor="Radio" onCheck={onCheck} />,
    );
    fireEvent.click(screen.getByLabelText('Radio'));

    expect(onCheck).toHaveBeenCalledTimes(1);
  });
});
