import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { LOGIN } from "../../services/graphql";
import { useMutation } from "@apollo/react-hooks";
import { errorHandling } from "../../services/graphql/ErrorHandling";

import "moment/locale/pt-br";

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
  const state = {
    email: "",
    password: ""
  };

  const [login] = useMutation(LOGIN);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={styles.form}>
        <CardContent>
          <Formik
            initialValues={state}
            validationSchema={validate}
            onSubmit={async (values, { setSubmitting }) => {
              await login({
                variables: {
                  email: values.email,
                  password: values.password
                }
              })
                .then(response => {
                  console.log(response.data.login);
                  window.localStorage.setItem("token", response.data.login);
                  alert("Sucesso");
                })
                .catch(error => {
                  alert(errorHandling(error));
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
