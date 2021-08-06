import React from "react";

class Item extends React.Component {
  state = {
    isInCart: false,
  };

  handleAddToCartClick = () => {
    this.setState((prevState) => {
      return {
        isInCart: !prevState.isInCart,
      };
    });
  };

  render() {
    const { isInCart } = this.state;
    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button
          className={isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;