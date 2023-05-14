import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css'
const Cart = (props) =>{
    const cartIems = <ul className={classes['cart-itmes']}>{[
        {d:'c1', name:'kimchi', amount:2, price :12.9},
    ].map((item)=><li>{item.name}</li>)}</ul>;

    return (
        <Modal>
            {cartIems}
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
            
        </Modal>
    );
}
export default Cart;