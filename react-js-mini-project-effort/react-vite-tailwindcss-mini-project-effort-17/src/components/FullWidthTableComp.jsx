import React from 'react';
import styled from 'styled-components';

const FullWidthTableComp = () => {
  return (
    <>
      <FullWidthTable/>
    </>
  );
}

export default FullWidthTableComp;

// Styled component for the table wrapper
const TableWrapper = styled.div`
  width: 100%;  /* Full width of the container */
  overflow-x: auto;  /* Add horizontal scroll if content overflows */
  margin: 20px 0;  /* Add some margin for spacing */
`;

// Styled component for the table
const Table = styled.table`
  width: 100%; /* Make the table take full width */
  border-collapse: collapse; /* Collapse borders to make the table cleaner */
  table-layout: fixed; /* Fixed table layout for consistent column widths */
`;

// Styled component for table headers
const TableHeader = styled.thead`
  background-color: #3498db; /* Blue background */
  color: white;
  text-align: left;
`;

// Styled component for table rows
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2; /* Alternating row colors */
  }

  &:hover {
    background-color: #ddd; /* Hover effect on rows */
  }
`;

// Styled component for table header cells
const TableHeaderCell = styled.th`
  padding: 12px 15px; /* Add padding for better spacing */
  text-align: left;
  font-weight: bold;
`;

// Styled component for table data cells
const TableDataCell = styled.td`
  padding: 12px 15px; /* Add padding for better spacing */
  text-align: left;
`;

const FullWidthTable = () => {
    return (
      <TableWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Age</TableHeaderCell>
              <TableHeaderCell>City</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableDataCell>John Doe</TableDataCell>
              <TableDataCell>28</TableDataCell>
              <TableDataCell>New York</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>Jane Smith</TableDataCell>
              <TableDataCell>34</TableDataCell>
              <TableDataCell>Los Angeles</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>Emily Davis</TableDataCell>
              <TableDataCell>22</TableDataCell>
              <TableDataCell>Chicago</TableDataCell>
            </TableRow>
          </tbody>
        </Table>
      </TableWrapper>
    );
  };
