import React, { Component } from 'react';
import Card1 from '../comps/Card1';
import Card2 from '../comps/Card2';
import Card3 from '../comps/Card3';
import { Grid, Button } from '@material-ui/core/';
import Category from './Category';

class Home extends Component {
    render() {
        return (
            <div style={{ margin: '20px' }}>
                <Category/>
                <Grid container spacing={2} style={{ maxHeight: "150px" }}>
                    <Grid item md={4} style={{ backgroundColor: "white" }}>
                        <Card2 />
                    </Grid>
                    <Grid item md={4} style={{ backgroundColor: "white" }}>
                        <Card1 />
                        <br />
                        <Card1 />
                        <br />
                        <Card1 />
                    </Grid>
                    <Grid item md={4} style={{ backgroundColor: "white" }}>
                        <Card2 />
                    </Grid>
                </Grid >
                <Grid container spacing={1} direction="row-reverse" style={{ backgroundColor: "white", marginTop: "36vh" }}>
                    <a href="./home" style={{ textDecoration: "none", color: "green" }}><p> See All Featured > &nbsp; </p></a>
                </Grid>
                <hr/>
                <Grid container style={{ backgroundColor: "bluee" }}>
                    <Grid item md={9}>
                        <p style={{ backgroundColor: "white", color:"white"}}>Popular topic</p>
                        <Card3/><br/>
                        <Card3/><br/>
                        <Card3/><br/>
                        <Card3/>
                    </Grid>
                    <Grid item md={3}>
                        <h2 style={{ backgroundColor: "tomatoo" }}>Popular on Medium</h2>
                        <Grid container direction="column">
                            <Grid container direction="row">
                                <Grid item md={2}>
                                    <h2 style={{paddingLeft:"1.5vw", color:"grey"}}>01</h2>
                                </Grid>
                                <Grid item md={10} style={{paddingRight:"90px"}}>
                                    <h5>
                                        Stop Obsessing About Focus: Here’s What Your Mind Really Needs</h5>
                                    <p>Corine Purtill in OneZone</p>
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item md={2}>
                                    <h2 style={{paddingLeft:"1.5vw", color:"grey"}}>02</h2>
                                </Grid>
                                <Grid item md={10} style={{paddingRight:"90px"}}>
                                    <h5>
                                        Stop Obsessing About Focus: Here’s What Your Mind Really Needs</h5>
                                    <p>Corine Purtill in OneZone</p>
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item md={2}>
                                    <h2 style={{paddingLeft:"1.5vw", color:"grey"}}>03</h2>
                                </Grid>
                                <Grid item md={10} style={{paddingRight:"90px"}}>
                                    <h5>
                                        Stop Obsessing About Focus: Here’s What Your Mind Really Needs</h5>
                                    <p>Corine Purtill in OneZone</p>
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item md={2}>
                                    <h2 style={{paddingLeft:"1.5vw", color:"grey"}}>04</h2>
                                </Grid>
                                <Grid item md={10} style={{paddingRight:"90px"}}>
                                    <h5>
                                        Stop Obsessing About Focus: Here’s What Your Mind Really Needs</h5>
                                    <p>Corine Purtill in OneZone</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>


        )
    }
}
export default Home;