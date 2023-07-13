import ItemMenu from '../ItemMenu';
import * as Styled from './styles';

const Menu = () => {
  return (
    <Styled.MenuWrapper>
      <Styled.UnorderedList>
        <ItemMenu>Dashboard</ItemMenu>
        <ItemMenu>Cadastros</ItemMenu>
        <ItemMenu>Relatórios</ItemMenu>
      </Styled.UnorderedList>
    </Styled.MenuWrapper>
  );
};

export default Menu;
