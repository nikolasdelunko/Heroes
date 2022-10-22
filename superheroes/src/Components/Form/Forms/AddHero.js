import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { addHeroShema } from "../Schemes";
import Button from "../../Button/Button";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import AddPhoto from "./AddPhoto";
import {
	setHeroProfile
} from "../../../store/helpers/helpersSlice";

export default function AddHero({ textBtn, edit }) {
	const [nextPage, setNextPage] = useState(true);
  const dispatch = useDispatch();
  const activeHero = useSelector((state) => state.helpers.activeHero);

  return (
    <div>
      {nextPage ? (
        <Formik
          initialValues={{
            nickname: edit ? activeHero.nickname : "",
            real_name: edit ? activeHero.real_name : "",
            catch_phrase: edit ? activeHero.catch_phrase : "",
            origin_description: edit ? activeHero.origin_description : "",
            superpowers: edit ? activeHero.superpowers : "",
            Images: edit ? activeHero.Images :  "",
          }}
          validateOnBlur
          onSubmit={async (values) => {
						dispatch(setHeroProfile(values))
						setNextPage(!nextPage)
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
      ) : (
        <AddPhoto edit={edit} />
      )}
    </div>
  );
}
