import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
  `}
`;

export const ElementWrapper = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid #eee;
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
  `}
`;
