import * as Styled from './styles';

export type ItemMenuProps = {
  children?: string;
  isSubItem?: boolean;
};

const ItemMenu = ({ children, isSubItem }: ItemMenuProps) => {
  return (
    <Styled.ItemWrapper isSubItem={isSubItem}>{children}</Styled.ItemWrapper>
  );
};

export default ItemMenu;
