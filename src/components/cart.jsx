import React, { Component } from "react";
import CartItem from "./cart-item";
import ItemAddForm from "./item-add-form";
import style from "../styles/cart.module.css";

class Cart extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <main className={style.cart}>
        <ItemAddForm onAdd={this.handleAdd} />
        {this.props.items.length >= 1 ? (
          <>
            <ul>
              {this.props.items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={this.props.onIncrement}
                  onDecrement={this.props.onDecrement}
                  onDelete={this.props.onDelete}
                />
              ))}
            </ul>
            <button
              className={style["reset-button"]}
              onClick={this.props.onReset}
            >
              Reset All
            </button>
          </>
        ) : (
          <div className={style.empty}>There is no Item</div>
        )}
      </main>
    );
  }
}

export default Cart;
