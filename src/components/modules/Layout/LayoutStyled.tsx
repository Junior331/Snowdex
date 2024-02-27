import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { StyleProps } from './@types';

const LayoutContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.light};
  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.palette.color.light};
      background-color: ${({ theme }) => theme.palette.background.default};
    `};
`;

const LayoutContent = styled.div`
  zoom: 85%;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
  align-items: center;
  justify-content: flex-end;
  ${media.lessThan('large')`
    align-items: flex-start;
  `}
`;

export { LayoutContainer, LayoutContent };
