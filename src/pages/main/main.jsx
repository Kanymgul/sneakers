import React from 'react'
import { CardSneakers } from '../../components/card_sneakers/cardSneakers'
import Slider from '../slider/slider'
import css from "./main.module.css"



export const Main = () => {
    return (
        <div className={css.container}>
            <Slider/>
            <div>
                <div className={css.box}>
                    <h2 className={css.title}>Все кроссовки</h2>
                    <div >
                    <img className={css.img} src="../../images/loupe.svg" alt="" />
                    <input className={css.input} placeholder="Поиск..." type="text" />

                </div>
                </div>
               
            </div>
            <CardSneakers/>
        </div>
    )
}