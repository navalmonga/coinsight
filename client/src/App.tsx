import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components';
import { CoinDetail, CoinSummary } from './templates';
import GlobalStyle from './styles/global-styles';
import { WatchListContextProvider } from './contexts/watchListContext';

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Header title="coin cap" />
      <WatchListContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={CoinSummary} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
    </>
  );
}

export default App;
