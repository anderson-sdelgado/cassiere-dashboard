import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import ElementTable, { ElementTableProps } from '.';

const props: ElementTableProps = {
  children: 'any',
};

describe('<ElementTable />', () => {
  it('should render', () => {
    renderTheme(<ElementTable {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
