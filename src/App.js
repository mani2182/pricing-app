import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import Search from './components/Search';
import RecordList from './components/RecordList';

function App() {
  const [records, setRecords] = useState([]);

  return (
    <div className="App">
      <h1>Retail Store Pricing Feed</h1>
      <FileUpload setRecords={setRecords} />
      <br></br>
      <Search records={records} setRecords={setRecords} />
      <br></br>
      <RecordList records={records} setRecords={setRecords} />
    </div>
  );
}

export default App;