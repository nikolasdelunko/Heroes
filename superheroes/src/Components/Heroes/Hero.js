import React, { useState } from "react";
import Button from "../Button/Button";
import "./Style.css";
import { useDispatch } from "react-redux";
import {
  openModalDel,
  openModalEdit,
  setActiveHero,
} from "../../store/helpers/helpersSlice";

export default function Hero(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const {
    card: { nickname, real_name, origin_description, Images, catch_phrase, id },
  } = props;

  const handleHero = (slice) => {
    dispatch(slice(true));
    // dispatch(setActiveHero(nickname));
  };

  const showHero = () => {
    setShow(!show);
    dispatch(setActiveHero(props.card));
  };

  return (
    <div className="list-items" onClick={showHero}>
      <li className="card-product">
        <div className="head-card">
          <div className="card-head">
            <h3>{nickname}</h3>
          </div>
          <div>
            <img src={Images} width="200" height="180" alt="laptop" />
          </div>
        </div>
        <div className={show ? "body-card-visable" : "body-card"}>
          <span className="Name">
            <p className="text-left">Real name:</p> {real_name}
          </span>
          <span className="Name">
            <p className="text-left">catch phrase:</p>
            {catch_phrase}
          </span>
          <span className="Name">
            <p className="text-left">description: </p>
            {origin_description}
          </span>
          <div className="btnGroup">
            <Button
              onClick={() => handleHero(openModalEdit)}
              text="EDIT"
              classN="btn first"
            />
            <Button
              onClick={() => {
                handleHero(openModalDel);
              }}
              text="REMOVE"
              classN="btn first"
            />
          </div>
        </div>
      </li>
    </div>
  );
}
