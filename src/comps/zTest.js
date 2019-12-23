import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

const car = "https://reactgo.com/static/2459cebcad403d0c059bb1418ca354f8/aa5c7/react-background-image.png"

class Test extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div style={{backgroundColor:"tomato", backgroundImage:`url(${car})`}} />
        </Grid>
      </div>
    )
  }
}

export default Test;