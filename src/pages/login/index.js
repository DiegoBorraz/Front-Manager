import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import "moment/locale/pt-br";
import { login } from "../../services/User";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const validate = () => {
  return Yup.object().shape({
    email: Yup.string().email("Email invalido.").required("Email deve ser informado."),
    password: Yup.string()
      .min(6, "Senha deve ter no mínimo 6 caracteres.")
      .max(50, "Senha deve ter no máximo 50 caracteres.")
      .required("Senha deve ser informada")
  });
};

const Login = () => {
  const styles = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const state = {
    email: "",
    password: ""
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={styles.form}>
        <CardContent>
          <Formik
            initialValues={state}
            validationSchema={validate}
            onSubmit={async (values, { setSubmitting }) => {
              login({
                email: values.email,
                password: values.password
              })
                .then(response => {
                  console.log("FRONT: ", response);
                  dispatch({ type: "LOGIN", user: response.user });
                  history.push("/dashboard");
                })
                .catch(error => {
                  console.log("FRONT ERRO: ", error);
                });
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <form>
                <Grid className={styles.textField}>
                  <Field component={TextField} name="email" label="Email" type="email" fullWidth />
                </Grid>
                <Grid className={styles.textField}>
                  <Field component={TextField} name="password" label="Senha" type="password" fullWidth />
                </Grid>
                <Grid className={styles.textField}>
                  <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm} fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid className={styles.textField}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={() => (window.location.pathname = "/register")}
                  >
                    Registrar
                  </Button>
                </Grid>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles({
  form: {
    marginTop: "10%",
    width: 300
  },
  textField: {
    marginBottom: 5
  },
  inputDate: {
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    marginBottom: 5,
    textIndent: 10,
    paddingLeft: 10
  }
});

export default Login;
