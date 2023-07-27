import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Image, { ImageProps } from '.';

const props: ImageProps = {
  children: 'any',
};

describe('<Image />', () => {
  it('should render', () => {
    renderTheme(<Image {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
