import React from "react";
import OptionContainer from "./Option-container";

class OptionsContainer extends React.Component {
	render() {
		const { options } = this.props;
		return (
			<div className="form-group">
				{options.map((option, id) => (
					<OptionContainer
						key={id}
						id={id}
						label={option.label}
						onSelect={this.handleOptionSelect}
						className="input"
					/>
				))}
			</div>
		);
	}

	handleOptionSelect = (id) => {
		console.log(`Выбран элемент с id: ${id}`); // Выводим лог с id
		this.props.onSelect && this.props.onSelect(id); // При необходимости, передаем id дальше
	};
}

export default OptionsContainer;
