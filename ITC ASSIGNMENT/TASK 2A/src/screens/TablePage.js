// TablePage.js

import React from "react"

const TablePage = ({ data }) => {
  return (
    <div>
      <h2>Table Page</h2>
      <table>
        <thead>
          <tr>
            <th>Name: </th>
            <tbody>
              {data.map((item, index) => (
              <tr key={index}>
              <td>{item.name}</td>
              </tr>
            ))}
            </tbody>
            
            <th>Email: </th>
            <tbody>
              {data.map((item, index) => (
              <tr key={index}>
              <td>{item.email}</td>
              </tr>
            ))}
            </tbody>
            <th>Message: </th>
            <tbody>
              {data.map((item, index) => (
              <tr key={index}>
              <td>{item.message}</td>
              </tr>
            ))}
            </tbody>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TablePage;
