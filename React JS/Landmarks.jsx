import React, { useState } from 'react';
import './Exe5.css';

const Exe5 = () => {
  const [landmarks] = useState([
    { id: 1, name: 'Rama Mandir', location: 'Ayodhya', country: 'India' },
    { id: 2, name: 'Jatayu', location: 'Varkala', country: 'India' },
  ]);

  return (
    <div>
      <h1>Famous Landmarks</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {landmarks.map(({ id, name, location, country }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{location}</td>
              <td>{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exe5;



// import React, { Component } from 'react';
// import './Exe5.css'

// class Exe5 extends Component {
//   state = {
//     landmarks: [
//       { id: 1, name: 'Rama Mandir',location:'Ayodhya' ,country:'India'},
//       { id: 2, name: 'Jatayu', location:'Varkala',country:'India'},
//     ]
//   };

//   render() {
//     return (
//       <div>
//         <h1>Famous Landmarks</h1>
//         <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Location</th>
//                     <th>Country</th>
                    
//                 </tr>
//                 {this.state.landmarks.map(({ id, name, location,country }) => (
//                 <tr key={id}>
//                     <td>{name}</td>
//                     <td>{location}</td>
//                     <td>{country}</td>
//                 </tr>
//           ))}
//         </table>
       
//       </div>
//     );
//   }
// }

// export default Exe5;
