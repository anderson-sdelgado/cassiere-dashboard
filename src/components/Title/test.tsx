import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Title, { TitleProps } from '.';

const props: TitleProps = {
  children: 'any',
};

describe('<Title />', () => {
  it('should render', () => {
    renderTheme(<Title {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
