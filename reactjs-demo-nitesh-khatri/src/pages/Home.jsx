import React from 'react';
import StudentList from './../components/StudentList';

const Home = () => {
  return (
    <div className="content py-4">
      <div className="container mx-auto">
        <h3 className="font-bold text-[24px] mb-5 border-b-2 border-b-white-500">Grid View</h3>
        <StudentList/>
      </div>
    </div>  
  );
}

export default Home;
