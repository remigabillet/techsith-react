import React, { Component } from 'react';
import Child from './child'

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'john'
    };

    console.log('App constructor()');
  }


  componentWillMount(){
    console.log('App componentWillMount()');

    if (window.innerWidth < 800) {
      this.setState({innerWidth: window.innerWidth});
    }
  }

  changeState() {
    console.log('changeState()')
    this.setState({ name: 'Annie' });
  }

  unmountChild() {
    console.log('unmountChild()')
    this.setState({ name: 'UNMOUNT' })
  }

  render() {
    console.log('App render()')

    if (this.state.name === 'UNMOUNT') {
      return (<div />)
    } else {
      return (
        <div className="App">
          {this.state.name} |
          {this.state.innerWidth} |
          <Child name={this.state.name} />
          <button onClick={this.changeState.bind(this)}>Change State</button>
          <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
        </div>
      )
    }
  }

  componentDidMount() {
    console.log('App componentDidMount()');
  }

  componentWillReceiveProps() {
    console.log('APP componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate', nextProps, nextState);
    return true
  }

  componentWillUpdate() {
    console.log('App componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }

}

export default App;
