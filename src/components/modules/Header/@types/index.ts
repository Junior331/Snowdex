export type StyleProps = {
  dark?: boolean;
  isOpen?: boolean;
};
export type Link = {
  text: string;
  icon: string;
  router: string;
};
export type NavigationProps = {
  Links: Link[];
  isDark: boolean;
  handlePushRouter?: (router: string) => void;
};
