import { ReactNode } from 'react';

export type Props = {
  dark: boolean;
  width: string;
  height: string;
  isColumn?: boolean;
  isActive?: boolean;
  noPadding?: boolean;
  children: ReactNode;
};
