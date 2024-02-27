import { ReactNode, createContext, useMemo, useState } from 'react';

type ITabActiveProps = {
  contentActive: string;
  toggleTabActive: (item: string) => void;
};

const defaultTabActive: ITabActiveProps = {
  contentActive: '',
  toggleTabActive: () => {}
};

export const TabActiveContext = createContext<ITabActiveProps>(
  defaultTabActive as ITabActiveProps
);

export const TabActiveProvider = ({ children }: { children: ReactNode }) => {
  const [contentActive, setContentActive] = useState<string>('');

  const toggleTabActive = (item: string) => {
    setContentActive(item);
  };

  const value = useMemo(
    () => ({ contentActive, toggleTabActive }),
    [contentActive, toggleTabActive]
  );

  return (
    <TabActiveContext.Provider value={value}>
      {children}
    </TabActiveContext.Provider>
  );
};
