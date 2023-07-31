import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import ElementTable from '.';

describe('<ElementTable />', () => {
  it('should render', () => {
    renderTheme(<ElementTable>teste</ElementTable>);
    expect(screen.getByText('teste')).toBeInTheDocument();
  });

  it('should render image', () => {
    renderTheme(<ElementTable type="img">img/ninho.jpg</ElementTable>);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'img/ninho.jpg');
  });

  it('should render image', () => {
    renderTheme(<ElementTable type="id">1</ElementTable>);
    expect(screen.getByText('1')).toHaveStyle({ width: '5%' });
  });
});
