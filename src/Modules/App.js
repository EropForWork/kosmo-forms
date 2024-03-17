import React from "react";
import info from "../info.json";
import FormContainer from "./Form-container";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: info,
        }
    }
    render() {
        return (
            <FormContainer info={this.state.info} />
        )
    }
}

export default App;