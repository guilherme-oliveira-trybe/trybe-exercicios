import React, { Component } from "react";

class TextArea extends Component {
  render() {

    const { value, onChange } = this.props;

    return (
      <textarea
        name="textarea"
        value={value}
        onChange={onChange}
      />
    )
  }
}

export default TextArea;