import React from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // 1.a - increments the counter
  increment() {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello(); // Increment button invokes multiple methods
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  // 1.b - static "Hello" message
  sayHello() {
    alert('Hello! Member!');
  }

  // 2 - function that takes "welcome" as an argument
  sayWelcome(message) {
    alert(message);
  }

  // 3 - synthetic event, displays "I was clicked"
  handleClick(event) {
    alert('I was clicked');
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
        <button onClick={this.handleClick}>Click on me</button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;