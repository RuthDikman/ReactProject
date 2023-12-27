import * as React from 'react';
import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from "mobx-react"
import AppStore from "../../store/AppStore"
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login = (observer(()=> {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [appointmentArray, setAppointmentArray] = useState([])
  const [isDoLoginAlready, setIsDoLoginAlready] = useState(false);
  const [isLogin, setIsLoginOk] = useState(false);
  useEffect(() => {
    console.log(appointmentArray);
  })
  useEffect(() => {
    initialAppoinmentArray();
  },[])
  
  const handleLogin = async () => {
    setIsDoLoginAlready(true);
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name:name, password:password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      setIsLoginOk(true)
      AppStore.setIsLogin(true)

    }
    else if(response.status == 401){
      setName('')
      setPassword('')
      AppStore.setIsLogin(false)

    }
  }

  const initialAppoinmentArray = async () => {
    const response = await fetch("http://localhost:8787/appointments");
    const data = await response.json();
    setAppointmentArray([...data]);
  }

  const classes = useStyles();
      return (
        <>
              <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box className={classes.form} noValidate >
          <TextField
          onChange={(e) => setName(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            autoFocus
            value={name}
          />
          <TextField
          onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}>
            Sign In
          </Button>
        </Box>
        </div>
        </Container>
        {isDoLoginAlready && isLogin?
                     <>
                     <br/>
                     <Alert variant="outlined" severity="error">  
                     Error! One or more of the data entered is incorrect.
                   </Alert>
                   </>
                   :
                   <>
                   </>
}
</>
)
}))
export default Login