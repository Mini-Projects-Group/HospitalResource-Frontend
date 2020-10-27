import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup_hospital } from "../../redux/hospital/action";
import { signup_seller } from "../../redux/seller/action";
import styles from "./Register.module.css";

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

const Register = () => {
  const dispatch = useDispatch();

  const [hData, setHData] = useState({
    hospital_name: "",
    email_id: "",
    password: "",
    address: "",
    contact_no: "",
  });

  const [sData, setSData] = useState({
    shop_name: "",
    seller_name: "",
    email_id: "",
    password: "",
    address: "",
    contact_no: "",
  });

  const [type, setType] = useState(0);

  const handleType = (event, newValue) => {
    setType(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === 0) {
      const { hospital_name, email_id, password, address, contact_no } = hData;
      let res = await dispatch(
        signup_hospital(hospital_name, email_id, password, address, contact_no)
      );

      setHData({
        hospital_name: "",
        email_id: "",
        password: "",
        address: "",
        contact_no: "",
      });
    } else {
      const {
        shop_name,
        seller_name,
        email_id,
        password,
        address,
        contact_no,
      } = sData;

      let res = await dispatch(
        signup_seller(
          shop_name,
          seller_name,
          email_id,
          password,
          address,
          contact_no
        )
      );

      setSData({
        shop_name: "",
        seller_name: "",
        email_id: "",
        password: "",
        address: "",
        contact_no: "",
      });
    }

    // await dispatch(login_hospital(email,password));
  };

  const handleFieldChange = (field, value) => {
    let newFields;

    newFields = type === 0 ? { ...hData } : { ...sData };
    newFields[field] = value;

    if (type === 0) setHData(newFields);
    else setSData(newFields);

    //console.log(newFields);
  };

  const classes = useStyles();

  //console.log(hData);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {/* <Avatar className={classes.avatar}></Avatar> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        </div>
        <div>
          {/* {error.message && (
            <Alert severity={error.status === BAD_STATUS ? "error" : "success"}>
              {error.message}
            </Alert>
          )} */}
        </div>
      </div>
      <div className={styles.main}>
        <Paper square>
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleType}
            variant="fullWidth"
          >
            <Tab label="Hospital" />
            <Tab label="Distributor" />
          </Tabs>
        </Paper>
        <Paper className={styles.mainPaper}>
          <form noValidate className={classes.form}>
            {type === 0 ? (
              <>
                {/* Hospital fields */}
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={hData.email_id}
                  onChange={(e) =>
                    handleFieldChange("email_id", e.target.value)
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id=""
                  label="Hospital Name"
                  name=""
                  autoComplete=""
                  autoFocus
                  value={hData.hospital_name}
                  onChange={(e) =>
                    handleFieldChange("hospital_name", e.target.value)
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id=""
                  label="Hospital Address"
                  name=""
                  autoComplete=""
                  autoFocus
                  value={hData.address}
                  onChange={(e) => handleFieldChange("address", e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id=""
                  label="Contact No."
                  name=""
                  autoComplete=""
                  autoFocus
                  value={hData.contact_no}
                  onChange={(e) =>
                    handleFieldChange("contact_no", e.target.value)
                  }
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
                  value={hData.password}
                  onChange={(e) =>
                    handleFieldChange("password", e.target.value)
                  }
                />
              </>
            ) : (
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={sData.email_id}
                  onChange={(e) =>
                    handleFieldChange("email_id", e.target.value)
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id=""
                  label="Distributor's Name"
                  name=""
                  autoComplete=""
                  autoFocus
                  value={sData.seller_name}
                  onChange={(e) =>
                    handleFieldChange("seller_name", e.target.value)
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id=""
                  label="Distributor's Firm Name"
                  name=""
                  autoComplete=""
                  autoFocus
                  value={sData.shop_name}
                  onChange={(e) =>
                    handleFieldChange("shop_name", e.target.value)
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id=""
                  label="Distributor's Address"
                  name=""
                  autoComplete=""
                  autoFocus
                  value={sData.address}
                  onChange={(e) => handleFieldChange("address", e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id=""
                  label="Contact No."
                  name=""
                  autoComplete=""
                  autoFocus
                  value={sData.contact_no}
                  onChange={(e) =>
                    handleFieldChange("contact_no", e.target.value)
                  }
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
                  value={sData.password}
                  onChange={(e) =>
                    handleFieldChange("password", e.target.value)
                  }
                />
              </>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link to="/signin">Already registered ? Sign In</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Register;
