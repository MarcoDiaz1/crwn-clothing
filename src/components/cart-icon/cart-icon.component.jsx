import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/11.2 shopping-bag.svg.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateTopProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateTopProps, mapDispatchToProps)(CartIcon);
