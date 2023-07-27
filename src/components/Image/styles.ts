import styled, { css } from 'styled-components';
import * as ButtonStyles from '../Button/styles';

export const Wrapper = styled.div`
  width: 100%;

  ${ButtonStyles.Wrapper} {
    width: 100%;
    margin-bottom: 0.3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
