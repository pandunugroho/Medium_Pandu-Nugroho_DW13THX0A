import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
  },
  media: {
    height: 100,
  },
});

export default function Card2() {
  const classes = useStyles();

  return (
    <Grid className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.wikihow.com/images/thumb/4/40/Draw-a-Basic-Maze-Step-11.jpg/aid1126872-v4-728px-Draw-a-Basic-Maze-Step-11.jpg.webp"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              Your Family’s Behavioral Patterns Are In Your DNA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <p>Brianna Wiest in Human Parts</p>
          <p style={{color:"lightgrey"}}>Nov 15 . 7 min read</p>
          
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Grid>
  );
}
