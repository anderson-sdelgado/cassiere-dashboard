import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    signOut({ redirect: false });
    router.push('/login');
  };
  return (
    <Styled.Wrapper>
      <Styled.MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <MenuIcon aria-label="Open Menu" />}
        {isOpen && <CloseIcon aria-label="Close Menu" />}
      </Styled.MenuIcon>
      <Styled.Title>CASSIERE</Styled.Title>
      <Styled.Login>
        Anderson
        <a href="#" onClick={handleClick}>
          Sair
        </a>
      </Styled.Login>
    </Styled.Wrapper>
  );
};

export default Header;
