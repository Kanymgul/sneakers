import React from "react"
import { Link } from "react-router-dom"
import { CardSneakers } from "../../components/card_sneakers/cardSneakers"
import css from "./favourites.module.css"

export const Favoutites = () => {
    
    return (
        <div>
            <div className={css.title}>
               <Link to="/">
               <img src="../../images/arrow-pokupki.svg" alt=""/>
               </Link>
               <h1>Мои закладки</h1>
            </div>
            <CardSneakers/>
            <CardSneakers/>


        </div>
    )}