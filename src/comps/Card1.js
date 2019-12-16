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
// import Articlehighlights from './ArticleHighlights';

const Card1 = ({ articleName, articleImage, author, postDate, minDate }) => (
    <Grid>
        <Grid container spacing={2}>
            <Grid md={3} style={{ backgroundColor: "limee" }}>
                <img src={articleImage}
                    width="100%"
                    height="80%"/>
            </Grid>
            <Grid md={9} style={{ backgroundColor: "F9F9F9" }}>
                <h4 style={{ backgroundColor: "limee", lineHeight: "auto", margin: "5px" }}>{articleName}</h4><br/>
                <p style={{ backgroundColor: "limee", lineHeight: "auto", margin: "5px" }}>{author}</p>
                <p style={{ color: "lightgrey", margin: "5px" }}>{postDate} . {minDate} min read</p>
            </Grid>
        </Grid>

    </Grid>
)

export default Card1;