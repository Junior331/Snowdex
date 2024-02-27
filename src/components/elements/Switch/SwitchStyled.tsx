import styled, { css } from 'styled-components';
import { Props } from './@types';

export const Container = styled.button<Props>`
  width: 65px;
  height: 100%;
  border: none;
  display: flex;
  cursor: pointer;
  position: sticky;
  max-height: 30px;
  align-items: center;
  border-radius: 100px;
  justify-content: space-between;
  transition: background-color 0.2s;
  background-color: #6366f1;
  /* background: ${({ theme }) => theme.palette.color.white?.light}; */
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(99, 102, 241, 0.9);

  /* ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.palette.color.blue?.medium};
    `}; */
`;

export const Icon = styled.img<Props>`
  left: 6%;
  width: 30%;
  outline: none;
  max-width: 45px;
  position: absolute;
  transition: left 0.2s ease-out;

  background: none;
  :focus {
    background: none;
  }
  ${({ isChecked }) =>
    isChecked &&
    css`
      left: 65%;
      width: 23%;
    `};
`;
