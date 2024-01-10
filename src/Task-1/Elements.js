import React from 'react';
// import './index.css'

const Table = () => {
  const data = [
    { id: 1, name: 'Jagan', age: 23 },
    { id: 2, name: 'Guru', age: 35 },
    { id: 3, name: 'Ajay', age: 23 },
    { id: 4, name: 'Vijay', age: 23 },
    { id: 5, name: 'Uva', age: 35 },
    { id: 6, name: 'Gowtham', age: 23 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;