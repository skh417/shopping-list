import React, { Component } from "react";
import Cart from "./components/cart";
import Navbar from "./components/navbar";

export default class App extends Component {
  state = {
    items: [],
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count++;
    this.setState({ items });
  };

  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count = item.count < 1 ? 0 : item.count - 1;
    this.setState({ items });
  };

  handleDelete = (item) => {
    const items = this.state.items.filter((data) => data.id !== item.id);
    this.setState({ items });
  };

  handleAdd = (name) => {
    const items = [...this.state.items];

    for (const item of this.state.items) {
      if (item.name === name) {
        return alert("중복");
      }
    }

    items.push({ id: name, name, count: 0 });

    this.setState({ items });
  };

  handleReset = () => {
    console.log("리셋");
    const items = [...this.state.items];
    for (const item of items) {
      item.count = 0;
    }
    this.setState({ items });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.items.filter((item) => item.count > 0).length}
        />
        <Cart
          items={this.state.items}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
