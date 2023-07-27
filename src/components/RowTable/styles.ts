import styled, { css } from 'styled-components';

export const RowWrapper = styled.tr`
  width: 100%;
  /* ${({ theme }) => css``} */
`;

export const ElementWrapper = styled.td`
  /* ${({ theme }) => css``} */
`;

export const ElementIconWrapper = styled.td`
  ${({ theme }) => css`
    width: 10%;
    padding: ${theme.spacings.xsmall} 0;
    text-align: center;
  `}
`;
