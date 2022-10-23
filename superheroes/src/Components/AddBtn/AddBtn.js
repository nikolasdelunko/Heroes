import React from "react";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";

export default function AddBtn() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.helpers.modal);
  return (
    <div className="button">
      <span
        className="button-cross"
        onClick={() => dispatch(openModal(!modal))}
      />
    </div>
  );
}
