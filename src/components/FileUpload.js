import React, { useRef } from 'react';
import { uploadCsvFile } from '../api'; // Import the API call function
import Button from 'react-bootstrap/Button';

function FileUpload({ setRecords }) {
  const fileInput = useRef();

  const handleFileUpload = async () => {
    const file = fileInput.current.files[0];
    if (!file) return;

    try {
      const uploadedRecords = await uploadCsvFile(file);
      setRecords(uploadedRecords);
    } catch (error) {
      console.error('File upload error:', error);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInput} accept=".csv" />
      <Button onClick={handleFileUpload}>Upload CSV</Button>
    </div>
  );
}

export default FileUpload;