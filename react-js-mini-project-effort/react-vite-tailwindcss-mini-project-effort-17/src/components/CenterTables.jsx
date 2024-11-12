import React, { useState } from "react";
import { tableData } from "../constants/tableData";

const CenterTablesComp = () => {
  return (
    <>
      <CenteredTable />
    </>
  );
};

export default CenterTablesComp;

const CenteredTable = () => {
  // State to store table data (so it can be updated)
  const [data, setData] = useState(tableData);
  const [modalVisible, setModalVisible] = useState(false); // To show/hide modal
  const [selectedRow, setSelectedRow] = useState(null); // To track which row the modal is related to
  const [formData, setFormData] = useState(""); // Form input state
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Show the modal and set the selected row
  const handleModalOpen = (index) => {
    setSelectedRow(index);
    setModalVisible(true);
    setFormData(""); // Reset form data
  };

  // Close the modal
  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedRow(null);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (formData.trim() !== "") {
      // If the form is filled, mark as completed
      const updatedData = [...data];
      updatedData[selectedRow].status = false; // Set status to 'Completed'
      updatedData[selectedRow].formFilled = true; // Mark the form as filled
      setData(updatedData);
    }
    handleModalClose(); // Close modal after submission
  };

  // Sorting function
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  // Function to return the correct icon for sorting direction
  const getSortIcon = (column) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === "ascending" ? "🔼" : "🔽";
    }
    return ""; // No icon if not sorted by this column
  };

  return (
    <div className="table-container">
      <table className="center-table">
        <thead>
        <tr>
            <th onClick={() => handleSort('name')}>
              Name {getSortIcon('name')}
            </th>
            <th onClick={() => handleSort('age')}>
              Age {getSortIcon('age')}
            </th>
            <th onClick={() => handleSort('city')}>
              City {getSortIcon('city')}
            </th>
            <th onClick={() => handleSort('status')}>
              Status {getSortIcon('status')}
            </th>
            <th>Action</th> {/* Action column to trigger modal */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>
                <span
                  className={`status ${row.status ? "pending" : "completed"}`}
                >
                  {row.status ? "Pending" : "Completed"}
                </span>
              </td>
              <td>
                {row.formFilled ? (
                  <span>Form Filled: Yes</span> // Show "Form Filled: Yes" if the form is filled
                ) : (
                  <button onClick={() => handleModalOpen(index)}>
                    {row.status ? "Yes" : "Form Filled"}{" "}
                    {/* Show Yes if Pending */}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Fill Form</h3>
            <textarea
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              placeholder="Enter some data..."
            />
            <div className="flex  gap-[20px]">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleModalClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
