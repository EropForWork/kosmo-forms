import React from "react";
// import "./Description.css";

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
        };
    }

    render() {
        return (
            <span className="description">{this.state.description}</span>
        )
    }
}

export default Description;

