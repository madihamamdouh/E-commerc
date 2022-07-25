import React from "react";
import { Formik } from "formik";
import Header from "./Header";

import "./login.css";

const Basic = () => (
  <>
    <Header />
    <div className="container mycontainer mt-5 bg-black ">
      <h1>Admin Login </h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email || !values.password) {
            errors.email = "Required";
            errors.password = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          window.location.replace("/Category");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={
                errors.email ? "from-control border-white" : "from-control"
              }
            />
            <br />
            {errors.email && touched.email && errors.email}
            <input
              className={
                errors && errors.password
                  ? "from-control border-danger"
                  : "from-control"
              }
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <br />
            {errors.password && touched.password && errors.password}
            <button className="sbtn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  </>
);

export default Basic;
