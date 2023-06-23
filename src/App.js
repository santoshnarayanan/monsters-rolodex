import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
    console.log('1');
  }

  componentDidMount() {
    console.log('3');
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state);

        }
      ))
  }

  render() {
    console.log('2');
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  };
}

export default App;
