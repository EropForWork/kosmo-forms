import React from "react";

class Button extends React.Component {
  handleSubmit = () => {
    console.log("Данные отправлены на сервер", this.props.selectedOption);
  };

  render() {
    return (
      <button className={this.props.className} onClick={this.handleSubmit} disabled={this.props.selectedOption === null ? true : false}>
        Отправить
      </button>
    );
  }
}

export default Button;
