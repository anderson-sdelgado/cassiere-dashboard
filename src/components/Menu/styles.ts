import styled, { DefaultTheme, css } from 'styled-components';
import media from 'styled-media-query';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (menuVisible: MenuBehaviorProps['menuVisible']) => css`
  display: ${menuVisible ? 'block' : 'none'};
  ${media.greaterThan('medium')`
    left: ${menuVisible ? '0' : '-30rem'};
    overflow-y: ${menuVisible ? 'auto' : 'hidden'};
  `}
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    text-align: center;
    padding-top: ${theme.spacings.small};
    height: calc(100vh - 3.5rem);
    background-color: ${theme.colors.lightGray};
    width: 100%;
    ${media.greaterThan('medium')`
      max-width: 30rem;
      text-align: left;
      left: 0;
    `}

    ${wrapperChanger(menuVisible)}
  `}
`;

export const MenuWrapper = styled.nav`
  margin: auto;
  width: 100%;
`;

export const UnorderedList = styled.ul``;

export const ItemList = styled.li``;
