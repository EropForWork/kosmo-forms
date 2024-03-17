import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: this.props.selected ? false : true,
    };
  }

  handleSubmit = () => {
    // Отправить данные на сервер
    console.log("Данные отправлены на сервер");
  };

  render() {
    return (
      <button className={this.props.className} disabled={this.state.disabled} onClick={this.handleSubmit}>
        Отправить
      </button>
    );
  }
}

export default Button;
