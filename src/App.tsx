/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Layout } from 'components/modules';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from 'routes';
import Provider from 'state/provider';
import { ThemeProvider } from 'styled-components';
import Theme from 'styles/Theme';

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

const App = () => {
  return (
    <Provider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={Theme}>
          <Router>
            <Layout>
              <AppRoutes />
            </Layout>
          </Router>
        </ThemeProvider>
      </Web3ReactProvider>
    </Provider>
  );
};

export default App;
