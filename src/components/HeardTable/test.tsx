import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import HeardTable from '.';

describe('<HeardTable />', () => {
  it('should render', () => {
    renderTheme(<HeardTable titles={['id', 'nome', 'slug']} />);
    expect(screen.getByText(/nome/i)).toBeInTheDocument();
  });
});
