import React from "react";
import Title from "./Title";
import info from "../info.json";
import Description from "./Description";
import OptionsContainer from "./Options-container";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: info.title,
            description: info.description,
            options: info.options,
        }
    }
    render() {
        return (
            <div>
                <Title title={this.state.title} />
                <Description description={this.state.description} />
                <OptionsContainer options={this.state.options} />
            </div>
        )
    }
}

export default App;