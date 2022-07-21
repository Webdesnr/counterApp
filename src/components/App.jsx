import React, { Component } from "react";
import Navbar from "./Navbar";
import Counters from "./counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counter = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counter });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState(counters);
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState(counters);
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
        <Counters
          counters={counters}
          handleDelete={this.handleDelete}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleDecrement={this.handleDecrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
