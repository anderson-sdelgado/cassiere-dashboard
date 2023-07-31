import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import CheckboxField from '.';

describe('<CheckboxField />', () => {
  it('should render', () => {
    renderTheme(<CheckboxField label="checkbox label" labelFor="check" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should dispatch onCheck when Label status changes', async () => {
    const onCheck = jest.fn();

    renderTheme(<CheckboxField label="checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });
});
