import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Home, { HomeTemplateProps } from '.';

const props: HomeTemplateProps = {
  children: 'any',
};

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
