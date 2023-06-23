import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [], searchField: ''
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

    const filteredMonsters = this.state.monsters.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(this.state.searchField);
    });


    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters'
          onChange={(event) => {
            //console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => { return { searchField } });
          }} />
        {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  };
}

export default App;
