import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import ItemMenu, { ItemMenuProps } from '.';

const props: ItemMenuProps = {
  children: 'any',
};

describe('<ItemMenu />', () => {
  it('should render', () => {
    renderTheme(<ItemMenu {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
