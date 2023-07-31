import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Video from '.';

describe('<Video />', () => {
  it('should render', () => {
    renderTheme(
      <Video src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'} />,
    );
    expect(screen.getByText(/excluir/i)).toBeInTheDocument();
  });
});
