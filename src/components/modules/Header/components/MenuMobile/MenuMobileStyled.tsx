import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { StyleProps } from '../../@types';

export const Container = styled.div<StyleProps>`
  width: auto;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-around;
  ${({ dark }) => media.lessThan('large')`
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding: 50px 20px;
    justify-content: flex-end;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.background.light};
  
  display: grid;
  display: none;
    grid-template-areas:
		"links links"
		"button switch";
    grid-auto-rows: 1fr 0fr;
    grid-template-columns: 1fr 0.7fr;

    > div:first-child {
      height: 100%;
      grid-area: links;
      align-items: flex-end;
      justify-content: space-around;
    }
    > div:nth-child(2n) {
      height: 35px;
      grid-area: switch;
    }
    > button:last-child {
      min-width: 100%;
      grid-area: button;
    }

    ${
      dark &&
      css`
        background-color: ${({ theme }) => theme.palette.background.default};
      `
    };
  `}
`;
export const ContainerTheme = styled.div`
  gap: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.h2<StyleProps>`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
export const Icon = styled.img`
  width: 40px;
`;
