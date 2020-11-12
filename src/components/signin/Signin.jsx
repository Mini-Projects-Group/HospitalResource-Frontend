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
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login_hospital } from "../../redux/hospital/action";
import { Alert, AlertTitle } from "@material-ui/lab";
import { BAD_STATUS } from "../../redux/utils/constants";
import { login_seller } from "../../redux";

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
  const dispatch = useDispatch();

  const [type, setType] = useState(0);

  const handleType = (event, newValue) => {
    setType(newValue);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.eReducer);
  const [route, setRoute] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === 0) {
      await dispatch(login_hospital(email, password));
      if (error.status !== BAD_STATUS) setRoute(1);
    } else {
      await dispatch(login_seller(email, password));
      if (error.status !== BAD_STATUS) setRoute(2);
    }
  };

  const classes = useStyles();

  if (route === 1) return <Redirect to='/auth/hospital/dashboard' />;
  else if (route === 2) return <Redirect to='/auth/seller/dashboard' />;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {/* <Avatar className={classes.avatar}></Avatar> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
        </div>
        <div>
          {error.message && (
            <Alert severity={error.status === BAD_STATUS ? "error" : "success"}>
              {error.message}
            </Alert>
          )}
        </div>
      </div>
      <div className={styles.main}>
        <Paper square>
          <Tabs
            value={type}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleType}
            variant='fullWidth'
            //aria-label="disabled tabs example"
          >
            <Tab label='Hospital' />
            <Tab label='Distributor' />
          </Tabs>
        </Paper>
        <Paper className={styles.mainPaper}>
          <form noValidate className={classes.form}>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container justify='center'>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to='/register'>Don't have an account ? Sign Up Now</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Signin;
