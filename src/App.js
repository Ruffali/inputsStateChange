import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [
      {
        name: 'Ruff Ali',
        age: '29',
        id: '001'
      },
      {
        name: 'Suleyman',
        age: '25',
        id: '002'
      },
      {
        name: 'Akif',
        age: '58',
        id: '003'
      },
    ],
  }
  onChangeState = (e, index) => {
    let array = [...this.state.users];
    let inputName = e.target.name;
    console.log(array[index]);
    if (inputName == 'name') {
      array[index].name = e.target.value;
    } else if (inputName == 'age') {
      array[index].age = e.target.value;
    }

    this.setState({ users: array })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.users.map((user, index) => (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <input onChange={(e) => { this.onChangeState(e, index) }} name="name" placeholder="Name" />
            <h2>Age: {user.age}</h2>
            <input onChange={(e) => { this.onChangeState(e, index) }} name="age" placeholder="Age" />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
