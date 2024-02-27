/* eslint-disable @typescript-eslint/no-explicit-any */
export type Props = {
  max: number;
  min: number;
  steps: number;
  value: number;
  dark: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  size: 'small' | 'medium' | 'large';
};
export type StyledInputProps = {
  dark?: boolean;
  width?: string;
  weight?: boolean;
  popUp?: boolean;
  size?: 'small' | 'medium' | 'large';
};
