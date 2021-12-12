import React from "react";
import ReactDOM from "react-dom";
import MaskedInput from "antd-mask-input";

import "./styles.css";

class CardNumber extends React.Component {
  state = {
    card: "5555444433332222",
    expiry: "012020",
    cvv: "987"
  };
  _onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="CreditCardDetails">
        <label>
          Card Number:{" "}
          <MaskedInput
            value={this.state.card}
            mask="1111 1111 1111 1111"
            name="card"
            size="20"
            onChange={this._onChange}
          />
        </label>
        <br />
        <label>
          Expiry Date:{" "}
          <MaskedInput
            value={this.state.expiry}
            mask="11/1111"
            name="expiry"
            placeholder="mm/yyyy"
            onChange={this._onChange}
          />
        </label>
        <br />
        <label>
          CCV:{" "}
          <MaskedInput
            value={this.state.cvv}
            mask="111"
            name="ccv"
            onChange={this._onChange}
          />
        </label>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CardNumber />, rootElement);
