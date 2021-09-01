import React from "react";

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  (
            <div>
                <h1>{this.props.title}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair-Color: {this.props.color}</p>
            </div>
        )
    }
}

export default PersonCard;