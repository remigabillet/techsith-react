import React, { Component } from 'react';

import { BrowserRouter as Router, NavLink, Redirect, Prompt } from "react-router-dom"
import Route from 'react-router-dom/Route'

const User = (params) => {
  return <h1>Welcome User {params.username} </h1>
}



class App extends Component {

  state = {
    loggedIn:false
  }

  loginHandle = () => {
    const prevState = this.state.loggedIn;
    this.setState({ loggedIn: !prevState });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><NavLink to="/"           exact activeStyle={{color:'green'}}>Home       </NavLink></li>
            <li><NavLink to="/about"      exact activeStyle={{color:'green'}}>About      </NavLink></li>
            <li><NavLink to="/user/Annie" exact activeStyle={{color:'green'}}>User: Annie</NavLink></li>
            <li><NavLink to="/user/Remi"  exact activeStyle={{color:'green'}}>User: Remi </NavLink></li>
          </ul>

          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
              return location.pathname.startsWith('/user') ? 'Are you sure?' : true
            }}
          />

          <input type="button"
                value={this.state.loggedIn ? "Log out" : "Log in"}
                onClick={this.loginHandle} />

          <Route path="/" exact strict render={
            ()=> {
              return ( <h1>Welcome Home</h1> )
            }
          } />

          <Route path="/about" exact strict render={
            ()=> {
              return ( <h1>Welcome About</h1> )
            }
          } />

          <Route path="/user/:username" exact strict render={({match}) => {
            if (this.state.loggedIn) {
              return(<User username={match.params.username} />)
            } else {
              return(<Redirect to="/" />)
            }
          }} />

        </div>
      </Router>
    )
  }

}

export default App;
