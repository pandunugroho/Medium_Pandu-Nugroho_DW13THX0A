import React, { Component } from 'react';
import { Avatar, Button, Chip, Grid } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class Follow extends Component {
  render() {
    return (

      < div >
      {/* FOLLOW TASK */ }
      <Grid container direction="column">
        <div>
        <Chip label="lorem" /> &nbsp;
          <Chip label="simple" /> &nbsp;
          <Chip label="flaucious" />
          </div>
        <br />
        <Grid container direction="row">
          <Grid xs={2} style={{ padding: "20px" }}><Avatar alt="Remy Sharp" style={{ width: "100px", height: "100px" }} src="https://miro.medium.com/max/368/1*e4AmOPj3A0IbN3im5JKfaQ.png" /></Grid>
          <Grid xs={7} style={{backgroundColor:"re000d"}}>
            <p style={{ margin: "65px 0 0 0" }}>54K claps</p>

          </Grid>
          <Grid xs={2} style={{ backgroundColor:"blu000e", padding: "50px 0 0 0px" }}><TwitterIcon /><LinkedInIcon /><FacebookIcon /><TurnedInNotIcon /><MoreHorizIcon /></Grid>
        </Grid>
        <div><hr style={{ border: "px solid grey" }} /></div>
        <Grid container direction="row">
          <Grid xs={2} style={{ padding: "20px" }}><Avatar alt="Remy Sharp" style={{ width: "100px", height: "100px" }} src="https://miro.medium.com/fit/c/96/96/1*tI-7PFqsquCcFyyTTFyytA.jpeg" /></Grid>
          <Grid xs={7}>
            <p style={{ color: "grey" }}>WRITTEN BY</p>
            <h2>Martha Pskowski</h2>
            <p>The best of the best seller of es teller. Lorem sayati insidia karadara snsid sndis ksndi.</p>
          </Grid>
          <Grid xs={2} style={{ padding: "50px 0 0 23px" }}><Button variant="outlined" >Follow</Button></Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid container direction="row">
          <Grid xs={2} style={{ padding: "20px" }}><Avatar alt="Remy Sharp" style={{ width: "100px", height: "100px" }} variant="circle" src="https://scontent-sin2-1.xx.fbcdn.net/v/t1.0-9/16142692_2212094679016116_695746583468761584_n.png?_nc_cat=103&_nc_oc=AQlwI61sJONWjNvOuvuzbznxOuZI38BkaAuNy860a-fbVsncglhFpw5AV-EH8nndJ64&_nc_ht=scontent-sin2-1.xx&oh=0ce72d7d5f8f76005c0dc82e47d98089&oe=5EAF8497" /></Grid>
          <Grid xs={7}>
            <h2>Misson.org</h2>
            <p>The best of the best buyer of bubur subur. Lorem sayati insidia karadara snsid sndis ksndi.</p>
          </Grid>
          <Grid xs={2} style={{ padding: "50px 0 0 23px" }}><Button variant="outlined" >Follow</Button></Grid>
        </Grid>
      </Grid>
      <hr />
      <Link to="/comment">
       <Button variant="outlined" fullWidth >See responses (10) </Button>
      </Link>
</div >
    )
  }
}

export default Follow;