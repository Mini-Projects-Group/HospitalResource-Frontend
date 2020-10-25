import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styles from "./Signin.module.css";
import {
  Grid,
  FormControlLabel,
  Button,
  TextField,
  Checkbox,
  makeStyles,
  Avatar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signin = () => {
  const [type, setType] = useState(0);

  const handleType = (event, newValue) => {
    setType(newValue);
  };

  const classes = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {/* <Avatar className={classes.avatar}></Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </div>
      <div className={styles.main}>
        <Paper square>
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleType}
            variant="fullWidth"
            //aria-label="disabled tabs example"
          >
            <Tab label="Hospital" />
            <Tab label="Distributor" />
          </Tabs>
        </Paper>
        <Paper className={styles.mainPaper}>
          <form noValidate className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justify="center">
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to="/register">Don't have an account ? Sign Up Now</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Signin;
