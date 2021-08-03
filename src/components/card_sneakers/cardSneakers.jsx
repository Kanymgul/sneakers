import React, { useState} from "react"
import css from  "./cardSneakers.module.css"

export const CardSneakers = () => {
    const [show, setShow] = useState(false)
    const [check, setCheck] = useState(false)

    return (
        <div>
            <div className={css.card_container}>
                <div className={css.img}>
                    <img src="../../images/green-boots.svg" alt="" />
                </div>
                <div className={css.love_img}>
                    {!check && <img src="../../images/like.svg" alt="" onClick={() => setCheck(!check)} />}
                    {check && <img src="../../images/pink_love.svg" alt="" onClick={() => setCheck(!check)} />}

                </div>
                <p className={css.card_desc}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <p className={css.price}>Цена:</p>
                <p className={css.card_price}>12 999 руб.</p>
                <div className={css.plus_img}>
                {!show && <img src="../../images/+.svg" alt="" onClick={() => setShow(!show)} />}
                    {show && <img src="../../images/check.svg" alt="" onClick={() => setShow(!show)} />}
                </div>
            </div>
        </div>
    )}