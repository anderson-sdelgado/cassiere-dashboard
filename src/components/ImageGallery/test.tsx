import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import ImageGallery, { ImageGalleryProps } from '.';

const props: ImageGalleryProps = {
  children: 'any',
};

describe('<ImageGallery />', () => {
  it('should render', () => {
    renderTheme(<ImageGallery {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
