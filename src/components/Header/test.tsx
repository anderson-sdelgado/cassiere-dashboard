import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Header, { HeaderProps } from '.';

const props: HeaderProps = {
  children: 'any',
};

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
