import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { isAuthenticated } from "../../services/Auth";

export default function Dashboard({ children }) {
  const styles = useStyles();
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(isAuthenticated());
  });

  if (logged) {
    return (
      <div>
        <Grid container direction="row" justify="flex-start" alignItems="stretch">
          <Grid item xs={12} className={styles.Header}>
            Header
          </Grid>
          <Grid container className={styles.Body}>
            <Grid item xs={2} className={styles.Menu}>
              Menu
            </Grid>
            <Grid item xs={10} className={styles.Content}>
              {children}
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.Footer}>
            Footer
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
}

const useStyles = makeStyles({
  Father: {
    width: "100vh",
    height: "100vh"
  },
  Header: {
    backgroundColor: "#1C1C1C",
    height: "10vh"
  },
  Menu: {
    backgroundColor: "#0101DF",
    height: "100%"
  },
  Content: {
    backgroundColor: "#5F4C0B",
    height: "100%"
  },
  Body: {
    backgroundColor: "#FF4000",
    height: "80vh"
  },
  Footer: {
    backgroundColor: "#21610B",
    height: "10vh"
  }
});
