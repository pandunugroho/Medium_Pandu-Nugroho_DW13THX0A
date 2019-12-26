import React, { Component } from 'react';
import { makeStyles, TextField, Box, Button, Grid, Card } from '@material-ui/core/';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Register from './Register';


// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       display: 'flex',
//       justifyContent:'center',
//       alignItems:'center',
//       margin: theme.spacing(1),
//       width: 200,

//     },
//   },
// }));

class Login extends Component {
  render() {
  // const classes = useStyles();
  return (
    <div style={{display: "flex", alignItems:"center" , justifyContent: "center", width:"65vw", marginTop:"10vh", marginLeft:"18vw"}}>
    <Card>
      <Grid container spacing={2} justify-content="space-between">
        <Grid lg={3} item style={{ backgroundColor: "white" }}><img src="https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png"></img></Grid>
        <Grid lg={6}>
          <div style={{width:"70%", margin:"auto", textAlign:"center"}}>
            <h1 style={{ display: "flex", justifyContent: "center", m: 1, p: 1 }}>Login Medium.</h1>
            <p style={{ display: "flex", justifyContent: "center", m: 1, p: 1 }}>Enter the email address associated with your account and we'll send a magic link to your inbox.</p>
            <div style={{ width: '100%' }}>
              <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                <Box p={1} bgcolor="white">
                  <form /*className={classes.root}*/ noValidate autoComplete="off" >
                    <TextField id="standard-basic" label="Username" /><br />
                    <TextField id="standard-basic" label="Password" />
                  </form><br />
                  <Button variant="contained" size="lg" fullWidth>Login</Button>
                </Box>
              </Box>
            </div>
            <p style={{ display: "flex", justifyContent: "center", m: 1, p: 1, bgcolor: "background.paper" }}>Don't have an account? &nbsp; <a href="./Register">Register</a></p>
          </div>
        </Grid>
        <Grid lg={3} item style={{ backgroundColor: "white" }}><img style={{justifyContent:"row-reverse"}} src="https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png"></img></Grid>
      </Grid>
    </Card>
    </div >

  );
}}

export default Login