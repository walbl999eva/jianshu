import React, {Component} from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {Route, HashRouter} from 'react-router-dom'
import Home from './pages/home/loadable'
import Detail from './pages/detail/loadable'
import Login from './pages/login/loadable'
import Write from './pages/write/loadable'
import {GlobalStyle} from './style';
import {IconFont} from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <IconFont/>
        <HashRouter>
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/write' exact component={Write}/>
          <Route path='/detail/:id' exact component={Detail}/>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
