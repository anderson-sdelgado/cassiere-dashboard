import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Header from '.';

describe('<Header />', () => {
  it('should render', () => {
    const setIsOpen = jest.fn();
    renderTheme(<Header isOpen={false} setIsOpen={setIsOpen} />);
    expect(screen.getByText(/cassiere/i)).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });

  it('should render close', () => {
    const setIsOpen = jest.fn();
    renderTheme(<Header isOpen={true} setIsOpen={setIsOpen} />);
    fireEvent.click(screen.getByLabelText(/close/i));
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });
});
