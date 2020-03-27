import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import "moment/locale/pt-br";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

const InputDate = ({ value }) => {
  const [date, setDate] = useState(new Date());
  const onDate = date => {
    setDate(date);
    value = date;
  };
  return (
    <Grid>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker value={date} onChange={onDate} />
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default InputDate;
