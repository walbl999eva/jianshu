import React, {Component} from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import {GlobalStyle} from './style';
import {IconFont} from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <IconFont/>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
