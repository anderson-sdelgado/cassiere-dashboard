import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Menu from '../../components/Menu';
import { MenuWrapper } from '../../components/Menu/styles';

export const Wrapper = styled.div`
  /* ${({ theme }) => css``} */
`;

type MenuProps = {
  isOpen: boolean;
};

export const Main = styled.div<MenuProps>`
  ${({ theme, isOpen }) => css`
    ${MenuWrapper} {
      position: fixed;
      z-index: ${theme.layers.menu};
      display: ${isOpen ? 'block' : 'none'};
    }

    ${media.greaterThan('medium')`
      ${MenuWrapper} {
        position: relative;
        display: block;
      }
      display: grid;
      grid-template-columns: 25rem 1fr;
    `}
  `}
`;

export const Content = styled.div`
  /* ${({ theme }) => css``} */
`;
