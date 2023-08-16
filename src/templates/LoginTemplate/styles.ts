import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.form`
  ${({ theme }) => css`
    width: 30rem;
    height: 26rem;
    background: #fff;
    padding: ${theme.spacings.small};
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `}
`;

export const BoxButton = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;
