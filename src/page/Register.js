import React, { Component } from 'react';
import { makeStyles, TextField, Box, Button, Grid, Card } from '@material-ui/core/';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login';


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

class Register extends Component {
  render() {
  // const classes = useStyles();
  return (
    <div style={{display: "flex", alignItems:"center" , justifyContent: "center", width:"65vw", marginTop:"10vh", marginLeft:"18vw"}}>
    <Card>
      <Grid container spacing={2} justify-content="space-between">
        <Grid lg={3} item style={{ backgroundColor: "white" }}><img src="https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png"></img></Grid>
        <Grid lg={6}>
          <div style={{width:"70%", margin:"auto", textAlign:"center"}}>
            <h1 style={{ display: "flex", justifyContent: "center", m: 1, p: 1 }}>Join Medium.</h1>
            <p style={{ display: "flex", justifyContent: "center", m: 1, p: 1 }}>Create an account to recieve great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
            <div style={{ width: '100%' }}>
              <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                <Box p={1} bgcolor="white">
                  <form /*className={classes.root}*/ noValidate autoComplete="off" >
                    <TextField id="standard-basic" label="Your fullname" /><br />
                    <TextField id="standard-basic" label="Your username" /><br />
                    <TextField id="standard-basic" type="password" label="Your password" />
                  </form><br />
                  <Button variant="contained" size="lg" fullWidth>Register</Button>
                </Box>
              </Box>
            </div>
            <p style={{ display: "flex", justifyContent: "center", m: 1, p: 1, bgcolor: "background.paper" }}>Already have an account? &nbsp; <a href="./Login">Login</a></p>
          </div>
        </Grid>
        <Grid lg={3} item style={{ backgroundColor: "white"}}><img src="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"></img></Grid>
      </Grid>
    </Card>
    </div >

  );
}}

export default Register
