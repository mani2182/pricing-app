// src/components/RecordList.js
import React from 'react';
import RecordItem from './RecordItem';

function RecordList({ records, setRecords }) {
  return (
    <table align='center'>
      <thead>
        <tr>
          <th>Store ID</th>
          <th>SKU</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <RecordItem key={record._id} record={record} setRecords={setRecords} />
        ))}
      </tbody>
    </table>
  );
}

export default RecordList;
