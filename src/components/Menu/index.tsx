import ItemMenu from '../ItemMenu';
import * as Styled from './styles';

export type MenuProps = {
  menuVisible: boolean;
};

const Menu = ({ menuVisible }: MenuProps) => {
  return (
    <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
      <Styled.MenuWrapper>
        <Styled.UnorderedList>
          <ItemMenu>Dashboard</ItemMenu>
          <ItemMenu>Cadastros</ItemMenu>
          <Styled.UnorderedList>
            <ItemMenu isSubItem>Categoria</ItemMenu>
          </Styled.UnorderedList>
          <ItemMenu>Relatórios</ItemMenu>
        </Styled.UnorderedList>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};

export default Menu;
