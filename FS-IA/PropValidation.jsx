import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Exe6 extends Component {
  render() {
    const { propArray, propBool, propString, propFunc, propNumber } = this.props;

    return (
      <>
      <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Value</th>
          <th>Valid</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Array</td>
          <td>{String(propArray)}</td>
          <td>{Array.isArray(propArray) ? "true" : "false"}</td>
        </tr>
        <tr>
          <td>Boolean</td>
          <td>{String(propBool)}</td>
          {/* Correct typeof check for boolean */}
          <td>{typeof propBool === "boolean" ? "true" : "false"}</td>
        </tr>
        <tr>  
          <td>String</td>
          <td>{String(propString)}</td>
          <td>{typeof propString === "string" ? "true" : "false"}</td>
        </tr>
        <tr>
          <td>Function</td>
          <td>{propFunc ? propFunc.toString() : "undefined"}</td>
          <td>{typeof propFunc === "function" ? "true" : "false"}</td>
        </tr>
        <tr>
          <td>Number</td>
          <td>{String(propNumber)}</td>
          <td>{typeof propNumber === "number" ? "true" : "false"}</td>
        </tr>
        </tbody>
        </table>
      </>
    );
  }
}

Exe6.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propString: PropTypes.string.isRequired,
  propFunc: PropTypes.func.isRequired,
  propNumber: PropTypes.number.isRequired,
};

export default Exe6;
