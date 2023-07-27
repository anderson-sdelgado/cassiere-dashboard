import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import FileField, { FileFieldProps } from '.';

const props: FileFieldProps = {
  children: 'any',
};

describe('<FileField />', () => {
  it('should render', () => {
    renderTheme(<FileField {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
