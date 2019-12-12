import React from 'react';
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid
} from '@material-ui/core/';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        maxHeight: 150,
        // maxWidth: 490,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Card3() {
    const classes = useStyles();

    return (
        <Grid className={classes.card}>
            <Grid container direction="row-reverse" spacing={2}>
                <Grid md={3} style={{ backgroundColor: "limee" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s"
                        width="100%"
                        height="100%"></img>
                </Grid>
                <Grid md={9} style={{ backgroundColor: "F9F9F9"}}>
                    <h4 style={{margin:"20px", backgroundColor: "limee", lineHeight: "auto", margin:"5px"}}>Your Family’s Behavioral Patterns Are In Your DNA</h4>
                    <p style={{margin:"20px"}}>Brianna Wiest in Human Parts</p>
                    <p style={{margin:"20px", color: "lightgrey" }}>Nov 15 . 7 min read</p>
                </Grid>
            </Grid>

        </Grid>
    );
}
