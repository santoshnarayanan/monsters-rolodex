import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: 'Andrei', lastName: 'Dominick' },
      company: 'ZTM'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName} and I work
            at {this.state.company}
          </p>
          <button onClick={
            () => {
              this.setState(() => {
                return {
                  name: { firstName: 'Yonaus', lastName: 'Yong' }
                }
              },
                () => {
                  //state updated and callback.
                  //Here callback is called which is optional
                  console.log(this.state);
                });
            }}
          >
            Change name
          </button>
          Learn React
        </header>
      </div>
    );
  };
}

export default App;
