import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from "../../store/ui";
import { toHaveAttribute } from '@testing-library/jest-dom/dist/matchers';

const CartButton = (props) => {

  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch();

  const onShowCartHandler=()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={onShowCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
