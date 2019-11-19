import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false,
    }

    //need to bind this for the functions, since they use this.state and this.setState.
    this.decrementCounter = this.decrementCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  decrementCounter() {
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  incrementCounter() {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const errorClass = this.state.error ? '' : 'hidden';
    return (
      <div className="App" data-test="component-app">
        <h1>This is My first TDD App using Jest and Enzyme</h1>
        <h2>To check the test file, <a href="https://github.com/deepbig/deepbig.github.io/tree/master/recent02">Click here!</a></h2>
        <br />
          <h2 data-test="counter-display">The counter is currently {this.state.counter}</h2>
          <div data-test="error-message" className={`error ${errorClass}`}>
            The counter cannot go below 0
          </div>
          <button 
            data-test="increment-button"
            onClick={this.incrementCounter}
          >
            Increment Counter
          </button>
          <button
            data-test="decrement-button"
            onClick={this.decrementCounter}>
            Decrement Counter
          </button>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App" data-test="component-app">
//         <h1 data-test="counter-display">The counter is currently</h1>
//         <button data-test="increment-button">Increment Counter</button>
//     </div>
//   );
// }

export default App;
