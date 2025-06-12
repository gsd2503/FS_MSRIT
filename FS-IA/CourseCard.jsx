import React, { Component } from 'react';
import PropTypes from 'prop-types';
//npm install prop-types
class Exe4 extends Component {
  render() {
    const { title, duration, name } = this.props;
    return (
      <>
        <p>
          <b>Title:</b>{title} <br />
          <b>Duration:</b>{duration} <br />
          <b>Name:</b>{name}
        </p>
      </>
    );
  }
}

Exe4.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Exe4;



// import PropTypes from 'prop-types';

// const Exe4 = ({ title,duration,name }) => {
//     return (
//         <>
//             <p><b>Title:</b>{title} <br /> <b>Duration:</b>{duration} <br /> <b>Name:</b>{name}</p>
//         </>
//     );
// }

// Exe4.propTypes = {
//     title:PropTypes.string.isRequired,
//     duration:PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
    
// };

// export default Exe4;
