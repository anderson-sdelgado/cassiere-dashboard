import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Table from '.';

describe('<Table />', () => {
  it('should render', () => {
    renderTheme(<Table />);
    expect(screen.getByText(/bala/i)).toBeInTheDocument();
  });
});
