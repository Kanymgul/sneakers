import React, { useState} from "react"
import css from  "./cardSneakers.module.css"

export const CardSneakers = (props) => {
    const [show, setShow] = useState(false)
    const [check, setCheck] = useState(false)

    const addBasket = () => {
        props.addBasket({title:props.title, imageUrl:props.imageUrl, price:props.price})
    }
    const addFavour = () => {
        props.addFavour({title:props.title, imageUrl:props.imageUrl, price:props.price})
    } 

    return (
        <div>
            <div className={css.cards}>
            <div className={css.card_container}>
                <div className={css.img}>
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className={css.love_img}>
                    {!check && <img src="../../images/like.svg" alt="" onClick={() => {
                        setCheck(!check);
                        addFavour();

                    } }/>}
                    {check && <img src="../../images/pink_love.svg" alt="" onClick={() => setCheck(!check)} />}

                </div>
                <p className={css.card_desc}>{props.title}</p>
                <p className={css.price}>Цена:</p>
                <p className={css.card_price}>{props.price} руб.</p>
                <div className={css.plus_img}>
                {!show && <img src="../../images/+.svg" alt="" onClick={() => {
                    setShow(!show);
                    addBasket();
                    } } />}
                    {show && <img src="../../images/check.svg" alt="" onClick={() => setShow(!show)} />}
                </div>
            </div>
            </div>
        </div>
    )}