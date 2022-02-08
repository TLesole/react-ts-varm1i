import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World'
    };
  }

  render() {
    return (
      <div>
       <h1> <Hello name={this.state.name} /></h1>
        <h2>
          Welcome to my 1st REACT project       </h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
