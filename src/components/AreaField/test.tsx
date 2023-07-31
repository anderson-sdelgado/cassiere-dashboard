import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import AreaField from '.';

describe('<AreaField />', () => {
  it('should render', () => {
    renderTheme(<AreaField name="descricao" />);
    expect(screen.getByText(/descricao/i)).toBeInTheDocument();
  });
});
