import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  /* ${({ theme }) => css``} */
`;

export const SelectWrapper = styled.select`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
  `}
`;

export const OptionWrapper = styled.option`
  /* ${({ theme }) => css``} */
`;
