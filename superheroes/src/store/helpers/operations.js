import {
  setPhotoName,
  setActiveHero,
  openModal,
  openModalEdit,
} from "./helpersSlice";
import axios from "axios";
import { useSelector } from "react-redux";

const fetchFileName = (selectedFile) => async (dispatch) => {
  const formData = new FormData();
  formData.append("file", selectedFile);
  try {
    const res = await axios.post("http://localhost:8000/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(setPhotoName(res.data));
  } catch (error) {
    console.log(error);
  }
};

const fethHeroInfo = (values) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8000/api/heroes", values);
    dispatch(setActiveHero(null));
    dispatch(openModal(false));
    dispatch(openModalEdit(false));
  } catch (e) {
    console.log(e);
  }
};

const editHeroInfo = (values) => async (dispatch) => {
	const activeHero = useSelector((state) => state.helpers.activeHero);
  try {
     await axios.patch(
          `http://localhost:8000/api/heroes/${activeHero.id}`,
          values
        )
    dispatch(setActiveHero(null));
    dispatch(openModal(false));
    dispatch(openModalEdit(false));
  } catch (e) {
    console.log(e);
  }
};

export default { fetchFileName, fethHeroInfo, editHeroInfo };
