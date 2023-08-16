import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { MenuWrapper } from '../../components/Menu/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

export const Wrapper = styled.div`
  /* ${({ theme }) => css``} */
`;

export const Content = styled.div<MenuBehaviorProps>`
  ${({ menuVisible }) => css`
    margin-left: ${!menuVisible ? 0 : '32rem'};
  `}
`;
