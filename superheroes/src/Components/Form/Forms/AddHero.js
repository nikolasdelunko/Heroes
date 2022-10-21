import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { addHeroShema } from "../Schemes";
import Button from "../../Button/Button";
import "./Style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalEdit,
  setActiveHero,
  openModal,
} from "../../../store/helpers/helpersSlice";

export default function AddHero({ textBtn, edit }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();
  const dispatch = useDispatch();
  const activeHero = useSelector((state) => state.helpers.activeHero);

  const handleUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const hendleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    const res = await axios.post("http://localhost:8000/api/upload", formData);
    return setUploaded(res.data);
  };

//! ттреба доробити 148 

  return (
    <Formik
      initialValues={{
        nickname: edit ? activeHero.nickname : "",
        real_name: edit ? activeHero.real_name : "",
        catch_phrase: edit ? activeHero.catch_phrase : "",
        origin_description: edit ? activeHero.origin_description : "",
        superpowers: edit ? activeHero.superpowers : "",
        Images: uploaded || "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          //! await hendleUpload(); 
          edit
            ? await axios.patch(
                `http://localhost:8000/api/heroes/${activeHero.id}`,
                values
              )
            : await axios.post("http://localhost:8000/api/heroes", values);
          dispatch(setActiveHero(null));
          dispatch(openModal(false));
          dispatch(openModalEdit(false));
        } catch (e) {
          console.log(e);
        }
      }}
      validationSchema={addHeroShema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <Form className="form">
          {touched.nickname && errors.nickname ? (
            <p className="text-error">{errors.nickname}</p>
          ) : (
            <p className="text-error">Nickname</p>
          )}
          <Field
            className="Input-form"
            name="nickname"
            type="text"
            label="nickname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nickname}
          />
          {touched.real_name && errors.real_name ? (
            <p className="text-error">{errors.real_name}</p>
          ) : (
            <p className="text-error">Name</p>
          )}
          <Field
            className="Input-form"
            name="real_name"
            type="text"
            label="real_name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.real_name}
          />
          {touched.catch_phrase && errors.catch_phrase ? (
            <p className="text-error">{errors.catch_phrase}</p>
          ) : (
            <p className="text-error">Catch Phrase</p>
          )}
          <Field
            className="Input-form"
            name="catch_phrase"
            type="text"
            label="catch_phrase"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.catch_phrase}
          />
          {touched.origin_description && errors.origin_description ? (
            <p className="text-error">{errors.origin_description}</p>
          ) : (
            <p className="text-error">Description</p>
          )}
          <Field
            className="Input-form"
            name="origin_description"
            type="text"
            label="origin_description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.origin_description}
          />
          {touched.superpowers && errors.superpowers ? (
            <p className="text-error">{errors.superpowers}</p>
          ) : (
            <p className="text-error">superpowers</p>
          )}
          <Field
            className="Input-form"
            name="superpowers"
            type="text"
            label="superpowers"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.superpowers}
          />
          {touched.Images && errors.Images ? (
            <p className="text-error">{errors.Images}</p>
          ) : (
            <p className="text-error">Images link</p>
          )}
          {/* <input
            className="Input-form"
            name="Images"
            accept="image/*, .png, .jpg, .gif, .web,"
            type="file"
            label="Images"
            onChange={handleUpload}
            // onBlur={handleBlur}
            // value={values.Images}
          /> */}
					    <Field
            className="Input-form"
            name="Images"
            type="text"
            label="Images"
            onChange={handleChange}
            // onBlur={handleBlur}
            value={values.Images}
          />
          <Button
            onClick={handleSubmit}
            text={textBtn}
            disabled={!isValid && !dirty}
            type="submit"
            classN="control-btn form-btn"
          >
            {textBtn}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
