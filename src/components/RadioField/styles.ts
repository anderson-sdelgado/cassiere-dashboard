import styled, { css } from 'styled-components';
import { RadioFieldProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid black;
    border-radius: 50%;
    background: transparent;
    outline: none;
    cursor: pointer;
    &:focus {
      box-shadow: 0 0 0.5rem black;
    }
    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: black;
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<RadioFieldProps>`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    cursor: pointer;
  `}
`;
