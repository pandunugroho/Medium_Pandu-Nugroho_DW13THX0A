import React, { Component } from 'react';
import { Card, Grid, TextField, Avatar } from '@material-ui/core';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';


const commentData = [
  {
    profileName: "Ariale Ghani",
    profileImage: "AG",
    commentDate: "Dec 1",
    commentContent: "Aliquam tincidunt dui at justo malesuada condimentum. Donec fermentum, lorem placerat aliquet ultrices, augue neque porttitor metus, sed dapibus ipsum purus at libero. Donec urna purus, varius in nisi eget, pellentesque ultricies nunc. Cras auctor euismod lorem. Donec non nunc a nunc rhoncus tincidunt. Ut sit amet aliquet urna. Integer fringilla orci libero, vel auctor justo convallis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac nisi risus.",
    clapsCount: "25",
    responsesCount: "12"
  },
  {
    profileName: "Bethair Lagani",
    profileImage: "BL",
    commentDate: "Dec 1",
    commentContent: "Aliquam tincidunt dui at justo malesuada condimentum. Donec fermentum, lorem placerat aliquet ultrices, augue neque porttitor metus, sed dapibus ipsum purus at libero. Donec urna purus, varius in nisi eget, pellentesque ultricies nunc. Cras auctor euismod lorem. Donec non nunc a nunc rhoncus tincidunt. Ut sit amet aliquet urna. Integer fringilla orci libero, vel auctor justo convallis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac nisi risus.",
    clapsCount: "5",
    responsesCount: "2"
  },
  {
    profileName: "Sandh Pashr",
    profileImage: "SP",
    commentDate: "Dec 1",
    commentContent: "Aliquam tincidunt dui at justo malesuada condimentum. Donec fermentum, lorem placerat aliquet ultrices, augue neque porttitor metus, sed dapibus ipsum purus at libero. Donec urna purus, varius in nisi eget, pellentesque ultricies nunc. Cras auctor euismod lorem. Donec non nunc a nunc rhoncus tincidunt. Ut sit amet aliquet urna. Integer fringilla orci libero, vel auctor justo convallis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac nisi risus.",
    clapsCount: "2",
    responsesCount: "1"
  },
  {
    profileName: "Lagna Sania",
    profileImage: "LS",
    commentDate: "Dec 1",
    commentContent: "Aliquam tincidunt dui at justo malesuada condimentum. Donec fermentum, lorem placerat aliquet ultrices, augue neque porttitor metus, sed dapibus ipsum purus at libero. Donec urna purus, varius in nisi eget, pellentesque ultricies nunc. Cras auctor euismod lorem. Donec non nunc a nunc rhoncus tincidunt. Ut sit amet aliquet urna. Integer fringilla orci libero, vel auctor justo convallis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac nisi risus.",
    clapsCount: "1",
    responsesCount: "0"
  },
  {
    profileName: "Mayori Siryu",
    profileImage: "MS",
    commentDate: "Dec 1",
    commentContent: "Aliquam tincidunt dui at justo malesuada condimentum. Donec fermentum, lorem placerat aliquet ultrices, augue neque porttitor metus, sed dapibus ipsum purus at libero. Donec urna purus, varius in nisi eget, pellentesque ultricies nunc. Cras auctor euismod lorem. Donec non nunc a nunc rhoncus tincidunt. Ut sit amet aliquet urna. Integer fringilla orci libero, vel auctor justo convallis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac nisi risus.",
    clapsCount: "0",
    responsesCount: "0"
  },
]


class Comment extends Component {
  render() {
    return (
      <>
        {/* showing responses for */}
        <div style={{ margin: "0 25vw 0 20vw" }}>
          <Grid container direction="column">
            <Grid><h3>Showing Responses for:</h3></Grid>
            <Grid>
              <Card style={{ padding: "30px 20px" }}>
                <Grid>If Uber Delivery Workers in Mexico Are Tracking Thieves Through Google Maps and WhatsApp Networks</Grid>
                <Grid>
                  <p style={{ color: "grey" }}>Martha Pskowski</p>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
        <hr />
        {/* Write a responses  */}
        <div backgroundColor="grey">
          <div style={{ margin: "0 25vw 0 20vw" }}>
            <Grid container direction="column">
              <Grid><h3>Responses </h3></Grid>
              <Grid>
                <Card style={{ padding: "30px 20px" }}>
                  <Grid container direction="row">
                    <Grid item xs={1}><Avatar>R</Avatar></Grid>

                    <Grid item xs={11}><TextField id="standard-basic" label="Write a response..." fullWidth /></Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        <br />
        {/* Map(response) */}
        {
          commentData.map(data => (
            <div>

              <div>
                <div style={{ margin: "0 25vw 0 20vw", backgroundColor: "t0omato" }}>
                  <Grid container direction="column">
                    <Grid>
                      <Card style={{ padding: "30px 20px" }}>
                        <Grid container direction="row">
                          <Grid item><Avatar>{data.profileImage}</Avatar></Grid>
                          <Grid item>
                            <p style={{ margin: "0 5px" }}>{data.profileName}</p>
                            <p style={{ margin: "0 5px", color: "grey" }}>{data.commentDate}</p>
                          </Grid>
                        </Grid>
                        <br />

                        <Grid>{data.commentContent}</Grid>
                        <br />

                        <Grid container direction="row" style={{display:"flex", justify:"center", alignItems:"auto"}} >
                          <Grid item ><Avatar><img src="https://miro.medium.com/max/368/1*e4AmOPj3A0IbN3im5JKfaQ.png" width="40px" /></Avatar></Grid>
                          <Grid item xs={9} style={{marginTop:"15px"}}>{data.clapsCount}</Grid>
                          <Grid item style={{marginTop:"15px"}}>{data.responsesCount} responses <TurnedInNotIcon /> &nbsp; V</Grid>
                        </Grid>
                      </Card>
                      <br />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          ))
        }
      </>
    );
  }
}

export default Comment;