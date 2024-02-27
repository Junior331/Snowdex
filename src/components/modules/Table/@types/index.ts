import { ReactNode } from 'react';

export type Props = {
  Title: string;
  isBlue?: boolean;
  isGray?: boolean;
  isDark?: boolean;
  listTh: string[];
  striped?: boolean;
  isPadding?: boolean;
  children: ReactNode;
};
export type StyleProps = {
  blue?: boolean;
  gray?: boolean;
  width?: string;
  isDark?: boolean;
  striped?: boolean;
  isPadding?: boolean;
};
