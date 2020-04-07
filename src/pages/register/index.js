import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import "moment/locale/pt-br";
import moment from "moment";
import { Formik, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment"; // choose your lib
import * as Yup from "yup";

import { getUser } from "../../services/graphql";

const validate = () => {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, "Nome deve ter no mínimo 2 caracteres.")
      .max(50, "Nome deve ter no máximo 50 caracteres.")
      .required("Nome deve ser informado."),
    email: Yup.string().email("Email invalido.").required("Email deve ser informado."),
    dateOfBirth: Yup.date()
      .max(moment().subtract(18, "years"), "Você deve ter no mínimo 18 anos.")
      .required("Data deve ser informada"),
    password: Yup.string()
      .min(6, "Senha deve ter no mínimo 6 caracteres.")
      .max(50, "Senha deve ter no máximo 50 caracteres.")
      .required("Senha deve ser informada"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "As senhas devem corresponder")
      .min(6, "Senha deve ter no mínimo 6 caracteres.")
      .required("Senha deve ser informada"),
  });
};

const onSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setTimeout(() => {
    setSubmitting(false);
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

const Register = () => {
  const styles = useStyles();
  const state = {
    name: "",
    email: "",
    dateOfBirth: new Date(moment().subtract(18, "years")),
    password: "",
    repeatPassword: "",
  };

  // retorno do Graphql
  console.log(getUser(2));
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={styles.form}>
        <CardContent>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Formik initialValues={state} validationSchema={validate} onSubmit={onSubmit}>
              {({ submitForm, isSubmitting }) => (
                <form>
                  <Grid className={styles.textField}>
                    <Field component={TextField} name="name" label="Nome" type="text" fullWidth />
                  </Grid>
                  <Grid className={styles.textField}>
                    <Field component={TextField} name="email" label="Email" type="email" fullWidth />
                  </Grid>
                  <Grid className={styles.textField}>
                    <Field
                      component={DatePicker}
                      name="dateOfBirth"
                      label="Data de nascimento"
                      format="LL"
                      maxDate={new Date(moment().subtract(18, "years"))}
                      minDate={new Date(moment().subtract(100, "years"))}
                      fullWidth
                    />
                  </Grid>
                  <Grid className={styles.textField}>
                    <Field component={TextField} name="password" label="Senha" type="password" fullWidth />
                  </Grid>
                  <Grid className={styles.textField}>
                    <Field
                      component={TextField}
                      name="repeatPassword"
                      label="Confirme sua senha"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid className={styles.textField}>
                    <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm} fullWidth>
                      Cadastrar
                    </Button>
                  </Grid>
                  <Grid className={styles.textField}>
                    <Button variant="contained" color="secondary" fullWidth>
                      Login
                    </Button>
                  </Grid>
                </form>
              )}
            </Formik>
          </MuiPickersUtilsProvider>
        </CardContent>
      </Card>
    </Grid>
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
