import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    city: true,
    address: true,
    postalCode: true,
  });
  const nameRef = useRef();
  const addressRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const orderConfirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPostalCode = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isNotFiveChars(enteredPostalCode);

    setFormInputValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      address: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
    //SubmitForm
  };

  const nameClasses = formInputValidity.name
    ? classes.control
    : `${classes.control} ${classes.invalid}`;
  const addressClasses = formInputValidity.address
    ? classes.control
    : `${classes.control} ${classes.invalid}`;
  const postalCodeClasses = formInputValidity.postalCode
    ? classes.control
    : `${classes.control} ${classes.invalid}`;
  const cityClasses = formInputValidity.city
    ? classes.control
    : `${classes.control} ${classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={orderConfirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={addressClasses}>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" ref={addressRef} />
        {!formInputValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="pin">Pin Code</label>
        <input id="pin" type="text" ref={postalRef} />
        {!formInputValidity.postalCode && <p>Please enter a valid pin code!</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancle
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
