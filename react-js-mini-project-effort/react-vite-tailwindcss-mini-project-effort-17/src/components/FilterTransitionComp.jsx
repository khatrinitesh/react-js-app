import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { usersData } from '../constants/usersData';

const FilterTransitionComp = () => {
  return (
    <>
      <FilterableTable/>
    </>
  );
}

export default FilterTransitionComp;

const FilterableTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(usersData);
  
    // Handle search input change
    const handleSearch = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
  
      // Filter data based on search term (name, age, or country)
      const filtered = usersData.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.country.toLowerCase().includes(value.toLowerCase()) ||
        user.age.toString().includes(value)
      );
      
      setFilteredData(filtered);
    };
  
    return (
      <TableWrapper>
        <TableHeading>Filterable User Table with Animations</TableHeading>
        
        {/* Search input */}
        <FilterInput
          type="text"
          placeholder="Search by name, age, or country"
          value={searchTerm}
          onChange={handleSearch}
        />
        
        <Table>
          <thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Age</TableHeader>
              <TableHeader>Country</TableHeader>
            </tr>
          </thead>
          
          <motion.tbody
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredData.map((user) => (
              <TableRow
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.country}</TableCell>
              </TableRow>
            ))}
          </motion.tbody>
        </Table>
      </TableWrapper>
    );
  };

// Styled Components for styling
const TableWrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f4f4f4;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-align: left;
`;

const TableRow = styled(motion.tr)`
  background-color: #fff;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const FilterInput = styled.input`
  padding: 8px;
  margin: 1rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
`;

const TableHeading = styled.h2`
  text-align: center;
  color: #333;
`;







