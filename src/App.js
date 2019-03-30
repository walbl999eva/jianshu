import React, {Component} from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {GlobalStyle} from './style';
import {IconFont} from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <IconFont/>
        <Header/>
      </Provider>
    );
  }
}

export default App;
