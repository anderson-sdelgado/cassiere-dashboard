import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Relation from '.';

describe('<Relation />', () => {
  it('should render', () => {
    renderTheme(<Relation title="Produto" />);
    expect(screen.getByText(/produto/i)).toBeInTheDocument();
  });
});
