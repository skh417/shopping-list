import React, { Component } from "react";
import style from "../styles/cart-item.module.css";

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
      <li className={style.item}>
        <div className={style["item-name-wrap"]}>
          <span className={style["item-name"]}>{name}</span>
        </div>
        <span className={style["item-count"]}>{count}</span>
        <button
          className={`${style["item-button"]} ${style["item-increase"]}`}
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className={`${style["item-button"]} ${style["item-decrease"]}`}
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className={`${style["item-button"]} ${style["item-delete"]}`}
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default CartItem;
