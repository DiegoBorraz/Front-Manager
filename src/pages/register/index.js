import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MomentUtils from "@date-io/moment";
import "moment/locale/pt-br";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

const Register = () => {
  const styles = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState(null);

  const onSubmit = () => {
    console.log("NAME: ", name);
    console.log("EMAIL: ", name);
    console.log("PASSWORD: ", name);
    console.log("DATEOFBIRTH: ", dateOfBirth.format("DD/MM/YYYY"));
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <form className={styles.form}>
        <Grid className={styles.textField}>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            variant="filled"
            autoComplete="current-name"
            fullWidth
          />
        </Grid>
        <Grid className={styles.textField}>
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            variant="filled"
            autoComplete="current-email"
            fullWidth
          />
        </Grid>
        <Grid>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container>
              <KeyboardDatePicker
                id="dateOfBirth"
                label="Date of Birth"
                value={dateOfBirth}
                onChange={setDateOfBirth}
                format="DD/MM/YYYY"
                variant="filled"
                fullWidth
                className={styles.inputDate}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid className={styles.textField}>
          <TextField
            id="password"
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            variant="filled"
            autoComplete="current-password"
            fullWidth
          />
        </Grid>
        <Grid className={styles.textField}>
          <TextField
            id="repeatPassword"
            label="Repeat Password"
            value={repeatPassword}
            onChange={e => setPassword(e.target.value)}
            type="password"
            autoComplete="current-repeatPassword"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid>
          <Button
            onClick={onSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Register
          </Button>
        </Grid>
      </form>
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
export default Register;
