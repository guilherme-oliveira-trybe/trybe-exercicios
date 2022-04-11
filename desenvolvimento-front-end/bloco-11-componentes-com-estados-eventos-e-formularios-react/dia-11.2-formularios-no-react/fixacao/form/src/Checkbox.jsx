import React, { Component } from "react";

class Checkbox extends Component {
  render() {

    const {value, onChange} = this.props;

    return (
      <input
        type="checkbox"
        name="checkbox"
        value={value}
        onChange={onChange}
      />
    )
  }
}

export default Checkbox;