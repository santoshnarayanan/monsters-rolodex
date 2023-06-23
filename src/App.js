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
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
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
    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((mon) => {
              return mon.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(() => { return { monsters: filteredMonsters } });
          }} />
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
