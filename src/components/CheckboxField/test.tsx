import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import CheckboxField, { CheckboxFieldProps } from '.';

const props: CheckboxFieldProps = {
  children: 'any',
};

describe('<CheckboxField />', () => {
  it('should render', () => {
    renderTheme(<CheckboxField {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
