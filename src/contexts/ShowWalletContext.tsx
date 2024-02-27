import { ReactNode, createContext, useMemo, useState } from 'react';

type IShowWalletProps = {
  isOpen: boolean;
  toggleShowWallet: (item: boolean) => void;
};

const defaultShowWallet: IShowWalletProps = {
  isOpen: false,
  toggleShowWallet: () => {}
};
export const ShowWalletContext = createContext<IShowWalletProps>(
  defaultShowWallet as IShowWalletProps
);

export const ShowWalletProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleShowWallet = () => {
    setIsOpen(!isOpen);
  };

  const value = useMemo(
    () => ({ isOpen, toggleShowWallet }),
    [isOpen, toggleShowWallet]
  );

  return (
    <ShowWalletContext.Provider value={value}>
      {children}
    </ShowWalletContext.Provider>
  );
};
