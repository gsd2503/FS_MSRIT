import React from "react";
import { Component } from "react";
import PropTypes, { string } from'prop-types';

class Valid extends Component{
    render(){
        return(
        <>
        <table>
            <tr>
                <th>Type</th>
                <th>Value</th>
                <th>Valid</th>
            </tr>
            <tr>
                <td>Array</td>
                <td>{this.props.ar}</td>
                <td>{Array.isArray(this.props.ar)?"True" : "False"}</td>
            </tr>
            <tr>
                <td>Boolean</td>
                <td>{this.props.bol ? "True" :"False"}</td>
                <td>{typeof(this.props.bol) === "boolean" ? "True" :"False"}</td>
            </tr>
            <tr>
                <td>Function</td>
                <td>{this.props.fun}</td>
                <td>True</td>
            </tr>
            <tr>
                <td>String</td>
                <td>{this.props.str}</td>
                <td>{typeof(this.props.str) === "string" ? "True" : "False"}</td>
            </tr> 
            <tr>
                <td>Number</td>
                <td>{this.props.num}</td>
                <td>{typeof(this.props.num)==="number" ? "True" : "False"}</td>
            </tr>
        </table>
        </>
    )}
}

Valid.propTypes = {
    ar: PropTypes.array.isRequired,
    bol: PropTypes.bool,
    fun: PropTypes,
    str: PropTypes.string,
    num: PropTypes.number 
}


Valid.defaultProps = {
    ar : [1,2,3,4,5],
    bol: false,
    fun: 10,
    str: "hello",
    num: "55"
}

export default Valid;