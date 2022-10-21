import React from "react";
import { Field, Form, Formik } from "formik";
import { addHeroShema } from "../Schemes";
import Button from "../../Button/Button";
import "./Style.css";

export default function AddHero({ textBtn }) {
  return (
    <Formik
      initialValues={{
        nickname: "",
        Name: "",
        catchPhrase: "",
        description: "",
        link: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        console.log(values);
        // try {
        //   console.log(values);
        // } catch (e) {}
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
          {touched.Name && errors.Name ? (
            <p className="text-error">{errors.Name}</p>
          ) : (
            <p className="text-error">Name</p>
          )}
          <Field
            className="Input-form"
            name="Name"
            type="text"
            label="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Name}
          />
          {touched.catchPhrase && errors.catchPhrase ? (
            <p className="text-error">{errors.catchPhrase}</p>
          ) : (
            <p className="text-error">Catch Phrase</p>
          )}
          <Field
            className="Input-form"
            name="catchPhrase"
            type="text"
            label="catchPhrase"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.catchPhrase}
          />
          {touched.catchPhrase && errors.catchPhrase ? (
            <p className="text-error">{errors.description}</p>
          ) : (
            <p className="text-error">Description</p>
          )}
          <Field
            className="Input-form"
            name="description"
            type="text"
            label="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {touched.link && errors.link ? (
            <p className="text-error">{errors.link}</p>
          ) : (
            <p className="text-error">Link</p>
          )}
          <Field
            className="Input-form"
            name="link"
            type="text"
            label="link"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.link}
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
