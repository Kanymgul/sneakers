import React from "react"
import css from "./cardModal.module.css"


export default function CardModal () {
    return (
        <div>
            <div className={css.container}>
                <img className={css.img1} src="../../images/card-boot.svg" alt="" />
                <div className="card__descrition">
                <p className={css.card__desc}>Мужские Кроссовки Nike Air Max 270</p>
                <p className={css.card__price}>8 499 руб.</p>
                </div>
                <img className={css.img2} src="../../images/x.svg" alt="" />
            </div>
        </div>
    )
}