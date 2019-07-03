import React, { Component } from 'react';
import './App.css';

// import AppFragments from './apps/AppFragments'
// import AppLists from './apps/AppLists'
// import AppLifecycle from './apps/AppLifecycle/App'
// import AppPureComponents from './apps/AppPureComponents/App'
import AppRouter from './apps/AppRouter/App'



class App extends Component {

  render() {
    return (
      <AppRouter />
    )
  }

}

export default App;
