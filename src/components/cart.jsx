import React, { Component } from "react";
import CartItem from "./cart-item";
import "../cart.css";
import ItemAddForm from "./item-add-form";

class Cart extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <>
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
            <button className="cart-reset" onClick={this.props.onReset}>
              Reset All
            </button>
          </>
        ) : (
          <div>비어있음</div>
        )}
      </>
    );
  }
}

export default Cart;
