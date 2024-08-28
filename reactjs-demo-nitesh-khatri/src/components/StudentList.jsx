import React, { useState, useEffect } from "react";
import StudentDetails from "./StudentDetails";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
  
    useEffect(() => {
      const fetchStudents = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setStudents(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchStudents();
    }, []);
  
    const handleTileClick = (student) => {
      setSelectedStudent(student);
    };
  
    const handleCloseDetails = () => {
      setSelectedStudent(null);
    };
  
    const handleUpdateStudent = (updatedStudent) => {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        )
      );
    };
  
    const handleDeleteStudent = (id) => {
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    };


  if(loading){
    return(
        <div>Loading...</div>
    )
  }

  if(error){
    return(
        <div>{error}</div>
    )
  }

  return (
    <>
       {selectedStudent ? (
        <StudentDetails
          student={selectedStudent}
          onClose={handleCloseDetails}
          onUpdate={handleUpdateStudent}
          onDelete={handleDeleteStudent}
        />
      ) : (
        <div className="tile-container cursor-pointer grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="tile card p-5 rounded-[5px] text-center bg-[#5eabb2] shadow-blue-400 transition-all duration-300 delay-300 hover:shadow-bxs1"
              onClick={() => handleTileClick(student)}
              data-aos="fade-up" // Add AOS attribute
              data-aos-delay={student.id * 100} // Optional delay based on student ID
            >
              <div className="tile-content gap-2 grid">
                <h3 className="h-[50px] font-bold text-[18px] uppercase text-[#ddf0f0]">
                  <strong>Name</strong>: {student.name}
                </h3>
                <p className="text-[#ddf0f0]"><strong>Email</strong>:  {student.email}</p>
                <p className="text-[#ddf0f0]"><strong>Address Street</strong>:  {student.address.street}</p>
                <p className="text-[#ddf0f0]"><strong>Address City</strong>:  {student.address.city}</p>
                <p className="text-[#ddf0f0]"><strong>Address Zipcode</strong>:  {student.address.zipcode}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StudentList;
