import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    render() {
        const cars = ["Racer", "Family Car", "Sport"];
        return (
            <div style={{margin: "0 8vw 0 8vw"}}>
                <p>
                    <Link to="/home">Home</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    OneZero &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                    Elemental &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                    Gen &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                    Zora &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                    Forge &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                    Human Parts &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                    Marker &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
                    Level  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Heated &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Modus 
                </p>
                {/* {cars.map(car => (<p>{car} &nbsp; </p>))} */}
            </div>
        )
    }
}


export default Category;

