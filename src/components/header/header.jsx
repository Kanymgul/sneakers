import React from "react";

import css from "./header.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CardModal from "../cardModal/cardModal";
import { Link } from "react-router-dom";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    right: 0,
    border: "none",
    outline: "none",
    width: 385,
    backgroundColor: "white",
    height: "100vh",
    padding: 30,
  },
}));

export default function Header() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <header className={css.container}>
        <Link className={css.link} to="/">
        <div className={css.container__left}>
          <img src="/images/logo.png" alt="logo" />

          <div className={css.box}>
            <h1 className={css.title}>REACT SNEAKERS</h1>
            <p className={css.description}>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <div className={css.container__right}>
          <div className={css.box__busket} onClick={handleOpen}>
            <img src="/images/busket.png" alt="busket" />
            <p className={css.money}>1205 руб.</p>
          </div>
          <Link className={css.img} to="/Favourites">
          <img src="/images/like.png" alt="like" />
          </Link>
          <Link className={css.img} to="/my_purchases">
          <img src="/images/Union.png" alt="profile" />

          </Link>
        </div>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className={css.modal_box}>
            <p className={css.modal__title}>Корзина</p>
            <img onClick={handleClose} src="../../images/x.svg" alt="" />
          </div>
          <div className={css.container__card}>
            <CardModal />
          </div>
          <div>
            <div className={css.modal_boxbottom}>
            <div className={css.modal_group_}>
                <p className={css.modal_text}>Итого: </p>
                <div className={css.modal_line}></div>
                <p className={css.modal_price}>21 498 руб. </p>
              </div>
              <div className={css.modal_group_}>
                <p className={css.modal_text}>Налог 5%:</p>
                <div className={css.modal_line}></div>
                <p className={css.modal_price}>1074 руб. </p>
              </div>
             
              <button className={css.modal_button}>
                <span>Оформить заказ</span>
                <span>&#8594;</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
