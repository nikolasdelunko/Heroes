import React from "react";
import HeroesList from "../../Components/Heroes/HeroesList";
import AddBtn from "../../Components/AddBtn/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";
import {
  openModalDel,
  openModalEdit,
  openModal,
} from "../../store/helpers/helpersSlice";
import "./Style.css";

export default function Main() {
  const dispatch = useDispatch();
  const modalDel = useSelector((state) => state.helpers.modalDel);
  const modalEdit = useSelector((state) => state.helpers.modalEdit);
  const modal = useSelector((state) => state.helpers.modal);
  const name = useSelector((state) => state.helpers.activeHero);

  const modalClose = (slice) => {
    dispatch(slice(false));
  };

  

  return (
    <div className="mainContainer">
      <HeroesList />
      <AddBtn />
      {modalDel && (
        <div className="list-items">
          <Modal
            header={"Confirm you choice"}
            modalOne={true}
            onClick={() => modalClose(openModalDel)}
            closeButton={true}
            modalClose={() => modalClose(openModalDel)}
            text={`Do you wont remove ${name} ?`}
            actions={
              <>
                <Button
                  onClick={() => {
                    console.log("delete");
                  }}
                  text="Delete"
                  classN="control-btn"
                />
                <Button
                  onClick={() => modalClose(openModalDel)}
                  text="Cancel"
                  classN="control-btn"
                />
              </>
            }
          />
        </div>
      )}
      {modalEdit && (
        <div className="list-items">
          <Modal
            header={"Confirm you choice"}
            modalOne={true}
            onClick={() => modalClose(openModalEdit)}
            closeButton={true}
            action={"edit"}
            modalClose={() => modalClose(openModalEdit)}
            text={`Do you wont edit  ${name} ?`}
          />
        </div>
      )}
      {modal && (
        <div className="list-items">
          <Modal
            header={"Confirm you choice"}
            modalOne={true}
            onClick={() => modalClose(openModal)}
            closeButton={true}
            action={"add"}
            modalClose={() => modalClose(openModal)}
            text={`Do you wont add  new Hero?`}
          />
        </div>
      )}
    </div>
  );
}
