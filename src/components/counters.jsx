import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      handleReset,
      counters,
      handleDelete,
      handleIncrement,
      handleDecrement,
    } = this.props;

    return (
      <div className="p-4">
        <button className="btn btn-warning btn-sm" onClick={handleReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
