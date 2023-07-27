import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Video, { VideoProps } from '.';

const props: VideoProps = {
  children: 'any',
};

describe('<Video />', () => {
  it('should render', () => {
    renderTheme(<Video {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
