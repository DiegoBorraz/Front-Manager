import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';





const Login = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '90vh' }}
        >

            <form>
                <Grid>
                    <TextField
                        id="email"
                        label="Email"
                        defaultValue=""
                        variant="filled"
                    />
                </Grid>
                <Grid>
                    <TextField
                        id="password"
                        label="Password"
                        defaultValue=""
                        variant="filled"
                        type="password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid>
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" color="primary">
                        Registrar
                    </Button>
                </Grid>
            </form>
        </Grid >
    )

}
export default Login;