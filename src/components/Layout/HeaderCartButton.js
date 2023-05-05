import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [bumpCartButton, setBumpCartButton] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItem = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${bumpCartButton ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpCartButton(true);

    const timer = setTimeout(() => {
      setBumpCartButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
