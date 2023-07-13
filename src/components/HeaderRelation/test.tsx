import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import HeaderRelation, { HeaderRelationProps } from '.';

const props: HeaderRelationProps = {
  children: 'any',
};

describe('<HeaderRelation />', () => {
  it('should render', () => {
    renderTheme(<HeaderRelation {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
