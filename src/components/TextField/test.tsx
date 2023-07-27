import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import TextField, { TextFieldProps } from '.';

const props: TextFieldProps = {
  children: 'any',
};

describe('<TextField />', () => {
  it('should render', () => {
    renderTheme(<TextField {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
