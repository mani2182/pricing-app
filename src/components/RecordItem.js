import React, { useState } from "react";
import { updateRecord } from "../api"; // Import the API call function

function RecordItem({ record, setRecords }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecord, setEditedRecord] = useState({ ...record });

  const handleSave = async () => {
    try {
      const updatedRecord = await updateRecord(editedRecord);
      setRecords((prevRecords) =>
        prevRecords.map((rec) =>
          rec._id === updatedRecord._id ? updatedRecord : rec
        )
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Update record error:", error);
    }
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            value={editedRecord.storeId}
            onChange={(e) =>
              setEditedRecord({ ...editedRecord, storeId: e.target.value })
            }
          />
        </td>
        <td>
          <input
            value={editedRecord.sku}
            onChange={(e) =>
              setEditedRecord({ ...editedRecord, sku: e.target.value })
            }
          />
        </td>
        <td>
          <input
            value={editedRecord.productName}
            onChange={(e) =>
              setEditedRecord({ ...editedRecord, productName: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="number"
            value={editedRecord.price}
            onChange={(e) =>
              setEditedRecord({
                ...editedRecord,
                price: parseFloat(e.target.value),
              })
            }
          />
        </td>
        <td>
          <input
            type="date"
            value={editedRecord.date}
            onChange={(e) =>
              setEditedRecord({ ...editedRecord, date: e.target.value })
            }
          />
        </td>
        <td>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{record.storeId}</td>
      <td>{record.sku}</td>
      <td>{record.productName}</td>
      <td>{record.price}</td>
      <td>{record.date}</td>
      <td>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </td>
    </tr>
  );
}

export default RecordItem;
