import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "moment/locale/pt-br";
import moment from "moment";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { TimePicker, DatePicker, DateTimePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment"; // choose your lib

import { textNumber, checkMail } from "../../util";

const validate = (values) => {
  const errors = {};

  console.log("error = ", errors);
  if (!values.name) {
    errors.name = "Nome deve ser informado.";
  } else if (values.name.length < 2) {
    errors.name = "Nome deve ter no mínimo 2 caracteres.";
  }
  if (!values.email) {
    errors.email = "Email deve ser informado.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email invalido.";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Data de nascimento deve ser informada.";
  } else if (values.dateOfBirth) {
    var difTime = moment(values.dateOfBirth).diff(new Date());
    var duration = moment.duration(difTime);
    console.log("DURAÇÃO DIAS == ", duration.years());
    if (duration.years() > -18) {
      errors.dateOfBirth = "Você deve ter no mínimo 18 anos.";
    }
  }
  if (!values.password) {
    errors.password = "Senha deve ser digitado.";
  } else if (values.password.length < 6) {
    errors.password = "Senha deve ter no mínimo 6 caracteres.";
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = "Senha de confirmação deve ser digitada.";
  } else if (values.repeatPassword != values.password) {
    errors.repeatPassword = "Sua senha e senha de confirmação devem ser iguais.";
  }
  return errors;
};

const onSubmit = (values, { setSubmitting }) => {
  console.log("values = ", values);
  console.log("setSubmitting =", setSubmitting);
  setTimeout(() => {
    setSubmitting(false);
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

const Register = () => {
  const styles = useStyles();
  const [state, setState] = useState({
    name: "",
    email: "",
    dateOfBirth: new Date(),
    password: "",
    repeatPassword: "",
  });

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Formik initialValues={state} validate={validate} onSubmit={onSubmit}>
          {({ submitForm, isSubmitting }) => (
            <form>
              <Grid className={styles.textField}>
                <Field component={TextField} name="name" label="Nome" type="text" />
              </Grid>
              <Grid className={styles.textField}>
                <Field component={TextField} name="email" label="Email" type="email" />
              </Grid>
              <Grid className={styles.textField}>
                <Field component={DatePicker} name="dateOfBirth" label="Data de nascimento" format="LL" />
              </Grid>
              <Grid className={styles.textField}>
                <Field component={TextField} name="password" label="Senha" type="password" />
              </Grid>
              <Grid className={styles.textField}>
                <Field component={TextField} name="repeatPassword" label="Confirme sua senha" type="password" />
              </Grid>
              <Grid className={styles.textField}>
                <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
                  Submit
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

const useStyles = makeStyles({
  form: {
    marginTop: "10%",
    width: 300,
  },
  textField: {
    marginBottom: 5,
  },
  inputDate: {
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    marginBottom: 5,
    textIndent: 10,
    paddingLeft: 10,
  },
});
export default Register;
