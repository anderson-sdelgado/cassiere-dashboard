import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Login, { LoginTemplateProps } from '.';

const props: LoginTemplateProps = {
  children: 'any',
};

describe('<Login />', () => {
  it('should render', () => {
    renderTheme(<Login {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
