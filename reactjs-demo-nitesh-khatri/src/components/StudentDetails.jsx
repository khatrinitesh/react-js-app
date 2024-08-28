import React, { useState } from "react";

const StudentDetails = ({ student, onClose, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: student.name || '',
    email: student.email || '',
    address: {
      street: student.address?.street || '',
      city: student.address?.city || '',
      zipcode: student.address?.zipcode || '',
    }
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${student.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...student, // Preserve existing student data
          name: editedData.name, // Update the name
          email: editedData.email, // Update the email
          address: {
            ...student.address, // Preserve other address details
            street: editedData.address.street, // Update street
            city: editedData.address.city, // Update city
            zipcode: editedData.address.zipcode, // Update zipcode
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
      }

      const updatedStudent = await response.json();
      console.log('Student data updated:', updatedStudent);

      // Notify parent component about the update
      onUpdate(updatedStudent);

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Error updating student. Please try again.');
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${student.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      console.log('Student data deleted:', student.id);

      // Notify parent component about the deletion
      onDelete(student.id);

      onClose(); // Close the modal after deletion
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Error deleting student. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressKey = name.split('.')[1];
      setEditedData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressKey]: value,
        },
      }));
    } else {
      setEditedData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-[#5eabb2] max-w-[350px] w-full p-10 rounded-[10px] relative">
        <button
          className="close-button bg-[#34616a] text-white absolute top-[10px] right-[10px] rounded-full w-[30px] h-[30px] flex items-center justify-center"
          onClick={onClose}
          aria-label="Close modal"
        >
          X
        </button>
        {isEditing ? (
          <div>
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleChange}
              className="border w-full h-[40px] outline-none px-2 rounded-[10px] font-bold"
              placeholder="Name"
            />
            <input
              type="text"
              name="email"
              value={editedData.email}
              onChange={handleChange}
              className="border w-full h-[40px] outline-none px-2 rounded-[10px] font-bold mt-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="address.street"
              value={editedData.address.street}
              onChange={handleChange}
              className="border w-full h-[40px] outline-none px-2 rounded-[10px] font-bold mt-2"
              placeholder="Address Street"
            />
            <input
              type="text"
              name="address.city"
              value={editedData.address.city}
              onChange={handleChange}
              className="border w-full h-[40px] outline-none px-2 rounded-[10px] font-bold mt-2"
              placeholder="Address City"
            />
            <input
              type="text"
              name="address.zipcode"
              value={editedData.address.zipcode}
              onChange={handleChange}
              className="border w-full h-[40px] outline-none px-2 rounded-[10px] font-bold mt-2"
              placeholder="Address Zipcode"
            />
            <br />
            <br />
            <button
              onClick={handleSaveClick}
              className="bg-[#2d464c] text-white rounded-[10px] w-full py-2 font-bold text-[15px]"
            >
              Save
            </button>
          </div>
        ) : (
          <>
           <div className="modalContent text-center mb-4">
              <h2 className="font-bold text-[20px]">{editedData.name}</h2>
              <a
                href={`mailto:${editedData.email}`}
                className="font-semibold text-[16px]"
              >
                {editedData.email}
              </a>
              <br />
              <br />
              <span className="text-white uppercase font-bold">
                <strong>ADDRESS:</strong>
              </span>
              <p>{editedData.address.street}</p>
              <p>{editedData.address.city}</p>
              <p>{editedData.address.zipcode}</p>
            </div>
            <div className="modal-footer grid grid-cols-2 gap-5">
              <button
                onClick={handleEditClick}
                className="bg-[#2d464c] text-white rounded-[5px] px-5 py-2 font-bold text-[15px]"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-[#2d464c] text-white rounded-[5px] px-5 py-2 font-bold text-[15px]"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
