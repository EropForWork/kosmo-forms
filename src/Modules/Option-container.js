import React from "react";

class OptionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      label: this.props.label,
    };
  }

  handleChange = () => {
    this.props.onSelect(this.props.id);
  };

  render() {
    return (
      <div className="option-container">
        <input
          type="radio"
          name="option"
          id={this.state.id}
          onChange={this.handleChange}
        />
        <label htmlFor={this.state.id}>{this.state.label}</label>
      </div>
    );
  }
}

export default OptionContainer;
