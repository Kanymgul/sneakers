import React from "react"
import { Link } from "react-router-dom"
import { CardSneakers } from "../../components/card_sneakers/cardSneakers"
import css from "./my_purchases.module.css"


export const Purchases = () => {
    return (
        <div>
            <div className={css.title}>
            <Link to="/">
            <img src="../../images/arrow-pokupki.svg" alt="" />
            </Link>
            <h1>Мои покупки</h1>
            </div>
            <CardSneakers/>
            <CardSneakers/>


        </div>
    )}