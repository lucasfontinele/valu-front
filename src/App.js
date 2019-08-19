import React, { Fragment } from 'react';
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <Fragment>
      <Header/>
      <Body/>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
