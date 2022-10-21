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
	setActiveHero,
} from "../../store/helpers/helpersSlice";
import "./Style.css";
import axios from "axios";

export default function Main() {
  const dispatch = useDispatch();
  const modalDel = useSelector((state) => state.helpers.modalDel);
  const modalEdit = useSelector((state) => state.helpers.modalEdit);
  const modal = useSelector((state) => state.helpers.modal);
	const heroName = useSelector((state) => state.helpers.activeHero);

  const modalClose = (slice) => {
    dispatch(slice(false));
  };

	const hendleDelete = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:8000/api/heroes/${id}`)
			if(res.status === 200) {
				dispatch(setActiveHero(null));
				modalClose(openModalDel)
			}
		} catch (error) {
			console.log(error)
		}
	}

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
            text={`Do you wont remove ${heroName.nickname} ?`}
            actions={
              <>
                <Button
                  onClick={() => {
                    hendleDelete(heroName.id)
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
            text={`Do you wont edit  ${heroName.nickname} ?`}
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
