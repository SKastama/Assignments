import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.age,
        };
    }

    birthdayClicked = (event) => { 
        console.log("CLicked", this.props.age)

        this.setState({ 
            count: parseInt(this.state.count)+1,
        }); 
    }
    
    render() {
        return  (
            <div>
                <h1>{this.props.title}</h1>
                <p>Age: {this.state.count}</p>
                <p>Hair-Color: {this.props.color}</p>
                <button onClick={ (event) => {this.birthdayClicked(event);} }>Birthday Button for {this.props.title}</button>
            </div>
        );
    }
}

export default PersonCard;