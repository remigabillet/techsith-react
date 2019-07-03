import React, { Component, Fragment } from 'react';

// using Fragment

const Temp1 = () => {
  return (
    <>
      <div>Hi</div>
      <div>Hi</div>
    </>
  )
}


const Temp2 = () => {
  return (
    <Fragment>
      <div>Hello Fragment</div>
      <div>Hello Fragment</div>
    </ Fragment>
  )
}



class App extends Component {

  render() {
    return (
      <div className="App">
        <Temp1/>
        <Temp2/>
      </div>
    )
  }
}

export default App;
