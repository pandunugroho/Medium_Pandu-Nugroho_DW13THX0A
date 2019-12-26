import React, { Component } from 'react';
import { Avatar, Button, Chip, Grid, Icon } from '@material-ui/core';
import Follow from '../comps/Follow'
import RelatedArticle from '../comps/RelatedArticle';

class ArticleDetails extends Component {
  render() {
    return (
      <div>
        {/* ARTICLE DETAILS TASK */}
        <Grid container style={{ display: "flex", alignText: "center" }}>
          <img src="https://s39jk6x0eh-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/MISSION-Logo-Black-1.png" width="10%" style={{ margin: "1vw 6vw" }} />
          <p>Mission Originals | Subscribe</p>
        </Grid>
        <hr />
        <div>
          <img src="https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg" width="80%" style={{ margin: "1% 10%" }} />
        </div >

        <a href="" style={{ display: "flex", justifyContent: "center" }}>Books</a>
        <Grid style={{ margin: "1px 22%" }}>
          <h2>Uber Delivery Workers in Mexico Are Tracking Thieves Through Google Maps and WhatsApp Networks</h2>
          <Grid container>
            <Grid xs={1} direction="row">

              <Avatar alt="Remy Sharp" style={{ width: "60px", height: "60px" }} src="https://miro.medium.com/fit/c/96/96/1*tI-7PFqsquCcFyyTTFyytA.jpeg" />
            </Grid>
            <Grid xs={8} direction="column">
              Martha Pskowski
              &nbsp;
            <Button variant="outlined" size="small">
                Follow
              </Button>
              <br />
              Jun 26, 2019 · 10 min read
          </Grid>
            <Grid xs={2} direction="column">
              Icon darkgrey
          </Grid>
          </Grid>
          <div style={{ textAlign: "justify" }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis commodo hendrerit. Nullam mattis massa est, a luctus nisi sodales vitae. Phasellus nec turpis eu magna dictum gravida. Mauris non eros leo. Cras nec consectetur felis, feugiat placerat lacus. In iaculis nisi tempor scelerisque aliquet. Fusce facilisis sagittis gravida. Duis consectetur vulputate eleifend. Morbi accumsan luctus viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

            <p>Sed consectetur vitae eros vitae consequat. Nullam dictum eu dolor vitae aliquam. Suspendisse dictum lectus vel leo lobortis, vitae imperdiet velit tincidunt. Vivamus scelerisque nunc ac rhoncus gravida. Nunc ligula tortor, accumsan ut mi sit amet, ultrices tempor nibh. Mauris quis augue sagittis, pulvinar lacus sed, ultrices eros. Suspendisse vulputate urna eget nisi luctus bibendum. Phasellus ac mollis dolor, nec rhoncus mi.</p>

            <p>Donec tincidunt arcu in ex sagittis vehicula. Sed imperdiet ullamcorper justo, sed posuere ex aliquam nec. Quisque hendrerit facilisis leo in tincidunt. Praesent volutpat pretium magna, at ultricies mi fringilla ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed elit ante, hendrerit vel ligula nec, condimentum mattis velit. Pellentesque diam augue, pulvinar nec neque et, maximus scelerisque justo.</p>

            <p>Maecenas eu orci faucibus, gravida magna non, condimentum libero. Quisque viverra nibh eros, cursus tristique est condimentum ac. Proin eget diam aliquam, tempor sem ut, aliquet arcu. Aliquam eget ornare diam, non egestas ipsum. Sed mollis lorem sit amet elementum auctor. Sed fringilla, felis sit amet mattis eleifend, tortor nibh ultricies dolor, et dapibus mi orci in eros. Morbi interdum lorem ornare diam tincidunt, eget facilisis ante tempus. Etiam vel dolor ut urna accumsan dictum. Nunc sed ligula a tortor dapibus condimentum. Vestibulum accumsan, elit sed ornare porttitor, dui augue sollicitudin felis, non venenatis lorem quam sed ante. Ut ut nulla sem.</p>

            <p>Aliquam tincidunt dui at justo malesuada condimentum. Donec fermentum, lorem placerat aliquet ultrices, augue neque porttitor metus, sed dapibus ipsum purus at libero. Donec urna purus, varius in nisi eget, pellentesque ultricies nunc. Cras auctor euismod lorem. Donec non nunc a nunc rhoncus tincidunt. Ut sit amet aliquet urna. Integer fringilla orci libero, vel auctor justo convallis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac nisi risus. Donec tempus ac quam eu condimentum. Vestibulum non nunc sed sem dapibus elementum nec vitae quam. Curabitur sapien neque, efficitur ut bibendum vitae, egestas vitae massa.</p>
          </div>
          <Follow/>
          <br/>
        </Grid>
          <RelatedArticle/>
      </div>
        )
      }
    }
    
export default ArticleDetails;
