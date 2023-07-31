import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import CountRelation from '.';

describe('<CountRelation />', () => {
  it('should render', () => {
    renderTheme(<CountRelation />);
    expect(screen.getByText('1000')).toBeInTheDocument();
  });
});
