import React from "react";
import OptionContainer from "./Option-container";

class OptionsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: this.props.options,
		}
	}

	render() {
		const { options } = this.props;
		return (
			<div>
				{
					options.map((option) => (
						<OptionContainer key={option.value} label={option.label} />
					))
				}
			</div>
		)
	}
}

export default OptionsContainer;