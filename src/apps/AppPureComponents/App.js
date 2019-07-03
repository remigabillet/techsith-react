import React, { PureComponent } from 'react';


const Temp = (props) => {
  console.log('Temp render');
  return(<div>{props.val}</div>)
}


class App extends PureComponent {

  state = {
    val: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(()=>{
        return { val : 1 }
      });
    }, 2000);
  }

  // if it were a Component instead of PureComponent

  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log('nextState', nextState);
  //   console.log('this.state', this.state);
  //   return  (nextState.val !== this.state.val);
  // }

  render() {
    console.log('App render');

    return (
      <div className="App">
        <h1>PureComponents</h1>
        <hr />

        <Temp val={this.state.val} />
      </div>
    )
  }

}

export default App;
