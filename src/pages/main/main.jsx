import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { CardSneakers } from '../../components/card_sneakers/cardSneakers'
import Slider from '../slider/slider'
import css from "./main.module.css"



export const Main = () => {

    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    const [favour, setFavour] = useState([])

    useEffect(() => {
      axios.get("https://60f11cfd38ecdf0017b0fa2e.mockapi.io/cards").then((response) => {
          setItems(response.data)
      })
    }, [])

    function addBasket(obj) {
        axios.post("https://60f11cfd38ecdf0017b0fa2e.mockapi.io/cart", obj)
        .then((res) => console.log(res))
        setCart((prev => ([...prev, obj])))
    }

    function addFavour(obj) {
        axios.post("https://60f11cfd38ecdf0017b0fa2e.mockapi.io/cars", obj)
        .then((res) => console.log(res))
        setFavour((prev => ([...prev, obj])))

    }


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
            <div>
                {items.map((item) => (
                    <CardSneakers addBasket={addBasket} addFavour={addFavour}
                       key={item.id}
                       title={item.title}
                       imageUrl={item.imageUrl}
                       price={item.price}
                    />
                    ))}
            </div>
        </div>
    )
}