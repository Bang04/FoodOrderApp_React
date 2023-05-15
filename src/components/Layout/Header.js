import React,{Fragment } from "react";
import HeaderCartBotton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from "./Header.module.css"

const Headers = (props) =>{
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartBotton onClick={props.onShowcart}/>
        </header>
        <div className={classes['mian-image']}>;
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
    )
};
export default Headers;