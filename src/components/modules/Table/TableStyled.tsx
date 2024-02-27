import styled, { css } from 'styled-components';
import { StyleProps } from './@types';

export const TableContainer = styled.div`
  gap: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Container = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h2:first-child {
    padding-left: ${({ isPadding }) => (isPadding ? '22px' : '0')};
  }
`;
export const List = styled(Container)<StyleProps>`
  overflow-y: auto;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #a8a8a8;
  }
  ${({ striped, isDark }) =>
    striped &&
    css`
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      > div:nth-child(odd) {
        background-color: #eff3fc;
      }
      > div:nth-child(even) {
        background-color: #dee6f6;
      }
      ${isDark &&
      css`
        > div:nth-child(odd) {
          background-color: #362f4e !important;
        }
        > div:nth-child(even) {
          background-color: #2a243e !important;
        }
      `};
    `};
`;
export const Title = styled.h2<StyleProps>`
  width: ${({ width }) => width || 'auto'};
  padding-left: ${({ isPadding }) => (isPadding ? '22px' : '0')};

  font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 100};
  ${({ blue }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.palette.color.blue?.light};
    `};

  ${({ gray }) =>
    gray &&
    css`
      color: ${({ theme }) => theme.palette.color.gray?.light};
    `};
`;
