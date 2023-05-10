import React,{Fragment } from "react";
import HeaderCartBottuon from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from "./Header.module.css"

const Headers = (porps) =>{
    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartBottuon />
        </header>
        <div className={classes['mian-image']}>;
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
    )
};
export default Headers;