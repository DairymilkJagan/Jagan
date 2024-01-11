import React, { Component } from 'react';
import './style.css'; // Import the CSS file for styling

class TableComponentClass extends Component {
  render() {
    const jsonData = [
      {
        "name": "Jagan",
        "department": "Engg",
        "dob": "17/04/2000"
      },
      {
        "name": "Guru",
        "department": "Engg",
        "dob": "18/12/2002"
      },
      {
        "name": "Ajay",
        "department": "Engg",
        "dob": "10/05/2001"
      },
      {
        "name": "Uva",
        "department": "Engg",
        "dob": "22/10/2004"
      },
      {
        "name": "Gowtham",
        "department": "Engg",
        "dob": "18/11/2002"
      }
    ];

    return (
      <div className="table-container">
        <h2>JSON Data in HTML Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.department}</td>
                <td>{data.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponentClass;