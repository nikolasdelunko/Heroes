import React, { useState, useRef, useEffect } from "react";
import Button from "../../Button/Button";
import "./Style.css";
import { fetchFileOperations } from "../../../store/helpers";
import { useDispatch, useSelector } from "react-redux";

export default function AddPhoto({edit}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const heroProfile = useSelector((state) => state.helpers.heroProfile);
	const activeHero = useSelector((state) => state.helpers.activeHero);
  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect( () => {
  	if(selectedFile){
			fetchFileOperations.fetchFileName(selectedFile)(dispatch);
  	}
  }, [selectedFile]);


  const uploadPhoto = () => {
		console.log(edit);
		if(heroProfile){
     edit ? fetchFileOperations.editHeroInfo(heroProfile, activeHero)(dispatch) : fetchFileOperations.fethHeroInfo(heroProfile)(dispatch)
		 console.log(edit)
		}
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <div className="photo-box">
      <input
        ref={filePicker}
        className="hidden"
        name="Images"
        accept="image/*, .png, .jpg, .gif, .web,"
        type="file"
        label="Images"
        onChange={handleUpload}
      />
      <Button
        text={"PICK PHOTO"}
        type="button"
        classN="control-btn form-btn"
        onClick={handlePick}
      />
      <Button
        text={"UPLOAD HERO"}
        type="button"
        classN="control-btn form-btn"
        onClick={uploadPhoto}
      />
      <Button
        text={"NO PHOTO"}
        type="button"
        classN="control-btn form-btn"
        onClick={uploadPhoto}
      />
    </div>
  );
}
