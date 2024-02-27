import styled, { css } from 'styled-components';
import icons from 'assets/img/Icon';
import { StyledInputProps } from './@types';

export const Container = styled.div<StyledInputProps>`
  gap: 8px;
  height: 100%;
  display: flex;
  font-size: 15px;
  padding: 0 12px;
  min-width: 240px;
  min-height: 48px;
  border-radius: 4px;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  text-overflow: ellipsis;
  justify-content: center;

  width: ${({ size }) => {
    if (size === 'large') {
      return '100%';
    }
    if (size === 'medium') {
      return '50%';
    }
    if (size === 'small') {
      return '30%';
    }
    return 'max-content';
  }};
`;
export const Content = styled.div<StyledInputProps>`
  gap: 8px;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .MuiSlider-root {
    z-index: 1;
    pointer-events: auto !important;
  }
  .MuiSlider-thumb {
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: bottom center;
    background-image: url(${icons.cursor_ranger});
    :hover {
      box-shadow: none;
    }
    .MuiSlider-valueLabel {
      padding: 5px 12px;
      border-radius: 15px;
      background-color: rgb(62, 55, 88);
      border: 2px solid rgba(83, 113, 161, 0.22);
      .MuiSlider-valueLabelLabel {
        font-size: 1.4rem;
        font-family: 'Inter';
      }
    }
  }
  ${({ dark }) =>
    dark &&
    css`
      .MuiSlider-thumb {
        background-image: url(${icons.cursor_ranger_dark});
      }
    `};
`;
export const Header = styled.div<StyledInputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Text = styled.h2<StyledInputProps>`
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    `};
`;
export const ContainerLines = styled.div<StyledInputProps>`
  top: 22px;
  width: 100%;
  height: 7px;
  display: flex;
  padding: 0 10px;
  position: absolute;
  border-radius: 10px;
  align-items: flex-start;
  width: ${({ width }) => width};
  justify-content: space-between;
`;
export const Line = styled.div<StyledInputProps>`
  width: 2px;
  height: 100%;
  border-radius: 100%;
  background-color: rgb(198, 199, 203);
  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.palette.color.blue?.medium};
    `};
`;
