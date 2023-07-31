import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Image from '.';

describe('<Image />', () => {
  it('should render', () => {
    renderTheme(<Image src="img/kit.jpg" />);
    expect(screen.getByText(/excluir/i)).toBeInTheDocument();
  });
});
