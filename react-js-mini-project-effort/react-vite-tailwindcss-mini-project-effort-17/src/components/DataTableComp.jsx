import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { data } from './../constants/datatableData';

const DataTableComp = () => {
  return (
    <>
      <DataTable/>
    </>
  );
}

export default DataTableComp;

const DataTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    // Sorting function
    const sortedData = useMemo(() => {
      const sortableData = [...data];
      if (sortConfig.key) {
        sortableData.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
          if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
          return 0;
        });
      }
      return sortableData;
    }, [sortConfig]); // Memoize sorted data when sortConfig changes
  
    const handleSort = (key) => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return (
        <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableHeaderCell onClick={() => handleSort('name')}>
                Name
                {sortConfig.key === 'name' && <SortIcon>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</SortIcon>}
              </TableHeaderCell>
              <TableHeaderCell onClick={() => handleSort('age')}>
                Age
                {sortConfig.key === 'age' && <SortIcon>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</SortIcon>}
              </TableHeaderCell>
              <TableHeaderCell onClick={() => handleSort('country')}>
                Country
                {sortConfig.key === 'country' && <SortIcon>{sortConfig.direction === 'ascending' ? '▲' : '▼'}</SortIcon>}
              </TableHeaderCell>
            </tr>
          </TableHeader>
          <tbody>
            {sortedData.map((row) => (
              <TableRow key={row.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.country}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    );
  };
  

// Styled Components for table elements
const TableContainer = styled.div`
  padding: 20px;
  background-color: #f4f7fc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 30px auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #4f6d7a;
  color: white;
`;

const TableRow = styled(motion.tr)`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
  font-size: 16px;
`;

const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  background-color: #4f6d7a;
  color: white;
  &:hover {
    background-color: #3c525f;
  }
`;

const SortIcon = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #ddd;
`;