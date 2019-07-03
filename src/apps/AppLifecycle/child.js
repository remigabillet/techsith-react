import React, { Component } from 'react';


class Child extends Component {

  constructor() {
    super()
    console.log('child constructor()');
  }

  componentWillMount() {
    console.log('child componentWillMount()');
  }

  render() {
    console.log('child render()');

    return (
      <div className="App">
        child: {this.props.name}
      </div>
    )
  }

  componentDidMount() {
    console.log('child componentDidMount()');
  }

  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log('child componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('child componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }
}

export default Child;