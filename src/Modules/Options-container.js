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
					options.map((option, id) => (
						<OptionContainer key={id} id={id} label={option.label} />
					))
				}
			</div>
		)
	}
}

export default OptionsContainer;