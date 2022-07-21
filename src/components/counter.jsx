import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  };

  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    const { value } = counter;
    let classes = " badge badge-";
    classes += value === 0 ? "danger" : "success";
    return (
      <div className="p-3">
        <span className={classes}>{this.formatCount()}</span>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0 ? true : false}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
