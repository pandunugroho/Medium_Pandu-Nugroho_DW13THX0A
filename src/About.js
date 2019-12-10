import React, {Component} from 'react';

const styles = {
  fontColor: "red",
}

class About extends Component{
  render () {
    const cars = ["Racer", "Family Car", "Sport"];
    return (
      <div style={{backgroundColor: "red"}} >
        {cars.map(car => (<p style={{color:"white"}}>{car}</p>))}
      </div>
    )
  }
}


export default About;