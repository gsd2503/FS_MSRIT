import React from "react";
import { Component } from "react";
import PropTypes from "prop-types"

class Mesg extends Component {
    render() {
        return (
            <>
                <p>This is {this.props.name} and my age is {this.props.age}</p>
                <p>Status: {(this.props.pass ? "Passed" : "Failed")}</p>
            </>
        )
    }
}


Mesg.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    pass: PropTypes.bool
}

export default Mesg;