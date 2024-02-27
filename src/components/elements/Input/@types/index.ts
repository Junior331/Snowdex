/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, RefObject } from 'react';

export type Props = {
  alt?: string;
  type?: string;
  dark: boolean;
  iconUrl?: string;
  search?: boolean;
  disabled?: boolean;
  description?: string;
  isSecondary?: boolean;
  placeholder?: string;
  onChange?: (e: any) => void;
  size: 'small' | 'medium' | 'large';
  reference?: MutableRefObject<HTMLInputElement>;
};

export type StyledInputProps = Props & {
  ref?: RefObject<HTMLInputElement>;
};
