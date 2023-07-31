import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';

export type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <Styled.MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <MenuIcon aria-label="Open Menu" />}
        {isOpen && <CloseIcon aria-label="Close Menu" />}
      </Styled.MenuIcon>
      <Styled.Title>CASSIERE</Styled.Title>
      <Styled.Login>Anderson</Styled.Login>
    </Styled.Wrapper>
  );
};

export default Header;
