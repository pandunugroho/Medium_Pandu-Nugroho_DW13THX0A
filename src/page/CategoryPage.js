import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import Card3 from '../comps/Card3';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <Grid container style={{ width: "90vw", backgroundColor: "0", margin: "2vw" }}>
                    <Grid md={3}><img src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" style={{ backgroundColor: "tomat0o", maxHeight: "10vh", margin: "0 0 0 5vw" }}></img></Grid>
                    <Grid md={7}><h3 style={{ margin: "1vw 12vw 1vw 5vw", backgroundColor: "lim0e" }}>The front lines of the future. A Medium publication about tech and science. &nbsp;</h3></Grid>
                    <Grid md={1}><p style={{ margin: "2vw 4vw", backgroundColor: "ligh0tgrey" }}><Button variant="outlined" size="small">Follow</Button> </p></Grid>
                </Grid>
                <Link to="/article-details" style={{ textDecoration: "none" }} >
                    <Grid container style={{ width: "80%", marginLeft: "8%", backgroundColor: "tomato" }}>

                        <Grid md={8}>
                            <div style={{ backgroundSize: "cover", height: "300px", width: "100%", backgroundImage: `url(${"https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg"})` }}>
                            </div>
                        </Grid>

                        <Grid md={4} style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", m: 1, p: 1 }}>

                            <div>
                                <h3>Uber Delivery Workers in Mexico Are Tracking Thieves Through Google Maps and WhatsApp Networks</h3>
                                <p>A 1,000-person WhatsApp community keeps delivery workers safe</p>
                                <p>Martha Pskowski</p>
                                <p>Dec 11 · 9 min read</p>
                            </div>
                        </Grid>

                    </Grid>
                </Link>
                <br /><br />
                <Grid container style={{ width: "80%", marginLeft: "8%", backgroundColor: "lightgrey" }}>
                    <Grid md={4} style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", m: 1, p: 1 }}>
                        <h3>If It’s OK to Fantasize About Someone You Know, Why Not in VR?</h3>
                        <p>Erotic deepfakes are only going to make the question of sexual ethics muddier and more confusing</p>
                        <p>Lux Alpatraum</p>
                        <p>Dec 11 · 7 min read</p>
                    </Grid>
                    <Grid md={8}><div style={{ backgroundSize: "cover", height: "300px", width: "100%", backgroundImage: `url(${"https://miro.medium.com/max/6300/1*Tc40NLUUtVafKwrl28VBrQ.jpeg"})` }}></div></Grid>
                </Grid>
                <br /><br />
                <Grid container style={{ width: "80%", marginLeft: "8%", backgroundColor: "white" }}>
                    <Grid md={8} style={{ backgroundColor: "blue" }}><div style={{ backgroundSize: "cover", height: "300px", width: "100%", backgroundImage: `url(${"https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"})` }}></div></Grid>
                    <Grid md={4} style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", m: 1, p: 1 }}>
                        <h3>The influencer and the Hit Man</h3>
                        <p>How a years-long domain name feud ended in a bloody shootout</p>
                        <p>Ian Frisch</p>
                        <p>Dec 10 · 24 min read</p></Grid>
                </Grid>
                <br />
                <Grid container style={{ display: "flex", maxWidth: "80%", backgroundColor: "tomato", margin: "1vw 8vw", padding: "2vw 19vw" }}>
                    <Grid style={{ backgroundColor: "tomato", color: "white" }}>
                        <h2>"We have a few new things to share.”</h2>
                        <p>— Damon Beres</p>
                        <p>Welcome to a Refreshed OneZero</p>
                        <p>Dec 3 · 2 min read
                    </p>
                    </Grid>
                </Grid>
                <hr />
                <Grid style={{ backgroundColor: "", margin: "2vw 27vw" }}>
                    <Card3 />
                </Grid>
                <hr />
                <Grid style={{ backgroundColor: "", margin: "2vw 27vw" }}>
                    <Card3 />
                </Grid>
                <hr />
                <Grid style={{ backgroundColor: "", margin: "2vw 27vw" }}>
                    <Card3 />
                </Grid>
                <hr />
                <Grid style={{ backgroundColor: "", margin: "2vw 27vw" }}>
                    <Card3 />
                </Grid>
                <hr />
                <Grid style={{ backgroundColor: "", margin: "2vw 27vw" }}>
                    <Card3 />
                </Grid>
                <hr />
            </div>
        )
    }
}
export default CategoryPage;
