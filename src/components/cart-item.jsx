import React, { Component } from "react";

class CartItem extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.item);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.item);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };

  render() {
    const { name, count } = this.props.item;
    return (
      <li className="item">
        <div className="item-name-wrap">
          <span className="item-name">{name}</span>
        </div>
        <span className="item-count">{count}</span>
        <button
          className="item-button item-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="item-button item-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="item-button item-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default CartItem;
