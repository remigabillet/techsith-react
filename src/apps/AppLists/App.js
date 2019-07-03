import React, { Component } from 'react';
import User from '../components/AppLists/User';
import UniqueId from 'react-html-id';

class App extends Component {

  constructor() {
    super();

    UniqueId.enableUniqueIds(this);

    this.state = {
      users: [
        {id: this.nextUniqueId(), name: 'Annie', age: 34},
        {id: this.nextUniqueId(), name: 'John',  age: 65},
        {id: this.nextUniqueId(), name: 'Remi',  age: 38},
      ]
    };

    console.log(this.state);
  }


  deleteUser = (index, e) => {
    const users = this.state.users.slice(0);
    users.splice(index, 1)

    this.setState({
      users: users
    })
  }

  changeUser = (user_id, e) => {
    const index = this.state.users.findIndex((user)=>{
      return user.id === user_id
    });

    const users = this.state.users.slice(0);
    users[index].name = e.target.value;

    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div className="App">
      <ul>
        {
          this.state.users.map((user, index)=>{
            return(<User
              key={user.id}
              age={user.age}
              delEvent={this.deleteUser.bind(this, index)}
              changeEvent={this.changeUser.bind(this, user.id)}
              >{user.name}</User>)
          })
        }
        <li></li>
      </ul>
      </div>
    )
  }
}

export default App;
