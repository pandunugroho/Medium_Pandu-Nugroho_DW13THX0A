import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton, Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 10,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header2() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} style={{ maxHeight: "150px", width:"99vw"}}>
        <div className={classes.root} >
          <AppBar position="static" style={{ backgroundColor: "white", boxShadow:"none", color: "Black" }}>
            <Toolbar>
              <Grid item md={9} style={{ backgroundColor: "white" }}>
                <Link to="/home">
                  <div>
                    <Typography variant="h6" className={classes.title}>
                      <img src="https://miro.medium.com/max/545/1*TGH72Nnw24QL3iV9IOm4VA.png" style={{height:"20px", marginTop:"15px", marginLeft:"100px"}} ></img>
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid item md={3} style={{ backgroundColor: "white", margin:"0vw 5vw"}}>
                <Link to="/login">
                  <Button variant="outlined" color="inherit" >Login</Button>
                </Link>
                <Link to="register">  
                  <Button variant="outlined" color="inherit" style={{ margin: "10px" }}>Register</Button>
                </Link>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    </>
  );
}
