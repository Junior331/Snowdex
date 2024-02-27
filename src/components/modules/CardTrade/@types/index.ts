// eslint-disable-next-line @typescript-eslint/ban-types
export type styledProps = {
  flex?: string;
  size?: string;
  dark?: boolean;
  width?: string;
  small?: boolean;
  green?: boolean;
  blue?: boolean;
  isEnd?: boolean;
  larger?: boolean;
  isColumn?: boolean;
  isSecondary?: boolean;
};
export type Props = {
  icon: string;
  name: string;
  dark: boolean;
  tagName?: string;
  marketCap: string;
  hourVolume: string;
  hourChange: string;
  tokenPrice: string;
  isSecondary?: boolean;
};
