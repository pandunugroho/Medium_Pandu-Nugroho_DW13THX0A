import React, { Component } from 'react';
import { Grid, Card, Avatar } from '@material-ui/core'

const relatedArticles = [
  {
    category: "Mission",
    articleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
    articleTitle: "The Liar's Honest Words",
    author: "Peteer Hkalin",
    authorInitial: "PH",
    postDate: "Des 2",
    minRead: "4",
    clapCount: "27"
  },
  {
    category: "Mission",
    articleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
    articleTitle: "How to data mining from a DNA. Reaching the future of human being",
    author: "Lische Kenny",
    authorInitial: "LK",
    postDate: "Des 1",
    minRead: "5",
    clapCount: "7"
  },
  {
    category: "Mission",
    articleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
    articleTitle: " Laaalaaal Lalala La Laalalaa LallalaaLa Laalalaa Lallalaa Laaalaaal Laaalaaal Lalala La Laalalaa Lallalaa Laaalaaal Lalala La Laalalaa Lallalaa Lalala",
    author: "Lagna Crimse",
    authorInitial: "LC",
    postDate: "Nov 2",
    minRead: "70",
    clapCount: "99"
  },
]

class RelatedArticle extends Component {
  render() {
    return (
      <div>

        <Grid xs={9} container direction="column" style={{backgroundColor:"r000ed", margin: "2vw 13vw" }}>
          <Grid> <h3>More From Medium</h3> </Grid>

          {/* map(related article) */}
          <Grid container direction="row" style={{backgroundColor:"000tomato",margin:""}}>
            {
              relatedArticles.map(articleData => (
                <div style={{padding:"2px",width:"24vw"}}>

                  <Grid style={{backgroundColor:"re000d"}}>
                    <Grid>
                      <p style={{ color: "grey" }}>More from {articleData.category} </p>
                    </Grid>
                    <Grid item
                      xs={12}
                      style={{
                        width: "23vw",
                        height: "25vh",
                        objectFit: "cover",
                        backgroundImage: `url(${articleData.articleImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}>
                      <img style={{ width: "100%", objectFit: "cover" }} />
                    </Grid>
                    <Grid container>
                      <h3>{articleData.articleTitle}</h3>
                    </Grid>
                    <Grid container direction="row">
                      <Grid item xs={2}><Avatar>{articleData.authorInitial}</Avatar></Grid>
                      <Grid item xs={7}>
                        {articleData.author} in {articleData.category}<br />
                        {articleData.postDate} · {articleData.minRead} min read
                      </Grid>
                      <Grid item xs={2}>{articleData.clapCount}</Grid>
                      <Grid item xs={1}>d</Grid>
                    </Grid>
                    &nbsp;
                  </Grid>
                </div>
              )
              )
            }
          </Grid>
        </Grid>
        {/* <hr /> */}
        <div style={{ backgroundColor: '#101010', padding: "0 13vw" }}>
          <Grid container direction="row" style={{ margin: "2vw 0 0 0", backgroundColor: "" }}>
            <Grid xs={4} >
              <div style={{color:"white", padding: "0 2vw"}} >
              <h4>Discover Medium</h4>
              <p style={{color:"grey"}}>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
              </div>
            </Grid>
            <Grid xs={4}>
            <div style={{color:"white", padding: "0 2vw"}} >
              <h4>Make Medium yours</h4>
              <p style={{color:"grey"}}>Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore</p>
            </div>
            </Grid>
            <Grid xs={4}>
            <div style={{color:"white", padding: "0 2vw"}} >
              <h4>Become a member</h4>
              <p style={{color:"grey"}}>Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just $5/month. Upgrade</p>
            </div>
            </Grid>
          </Grid>
          <hr></hr>
          <Grid container direction="row" style={{color:"white", margin: "2vw 0 0 0", padding: "5vh 0" }}>
            <Grid xs={9} style={{backgroundColor:""}}>
              <h1>Medium</h1>
            {/* <img src="https://miro.medium.com/max/484/1*uLuWzCXfq2rt1t_TkuLB8A.png"/> */}
            </Grid>
            <Grid xs={1} style={{display:"flex", margin: "auto", textAlign:"center"}}>About</Grid>
            <Grid xs={1} style={{display:"flex", margin: "auto", textAlign:"center"}}>Help</Grid>
            <Grid xs={1} style={{display:"flex", margin: "auto", textAlign:"center"}}>Legal</Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default RelatedArticle;