import { SearchProvider } from 'contexts/SearchContext';
import { ShowWalletProvider } from 'contexts/ShowWalletContext';
import { TabActiveProvider } from 'contexts/TabActiveContext';
import { ThemeProvider } from 'contexts/ThemeContext';
import React from 'react';

type ProviderType = {
  children: React.ReactElement | React.ReactElement[];
};

const Provider: React.FC<ProviderType> = ({ children }) => {
  return (
    <ThemeProvider>
      <TabActiveProvider>
        <ShowWalletProvider>
          <SearchProvider>{children}</SearchProvider>
        </ShowWalletProvider>
      </TabActiveProvider>
    </ThemeProvider>
  );
};

export default Provider;
