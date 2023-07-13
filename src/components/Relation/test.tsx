import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Relation, { RelationProps } from '.';

const props: RelationProps = {
  children: 'any',
};

describe('<Relation />', () => {
  it('should render', () => {
    renderTheme(<Relation {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
