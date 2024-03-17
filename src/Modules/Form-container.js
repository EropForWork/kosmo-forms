import React from "react";
import Title from "./Title";
import Description from "./Description";
import OptionsContainer from "./Options-container";
import Button from "./Button";

class FormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.info.title,
			description: this.props.info.description,
			options: this.props.info.options,
			selectedOption: null,
		};
	}

	handleOptionSelect = (selectedOption) => {
		this.setState({ selectedOption });
		console.log(this.state);
	};

	render() {
		return (
			<div className="form-container">
				<Title title={this.state.title} className="label" />
				<Description description={this.state.description} />
				<OptionsContainer options={this.state.options} onSelect={this.handleOptionSelect} />
				<Button className="button-confirm" type="button" text="Подтвердить!" selected={this.state.selectedOption !== null} />
			</div>
		);
	}
}

export default FormContainer;