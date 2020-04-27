import * as React from "react";
import { Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
const createData = (name: string, calories: number, fat: number) => {
  return { name, calories, fat };
}

const rows = [
  createData('Row1', 100, 6.0),
  createData('Row2', 100230, 9.0),
  createData('Row3', 12, 12.0),
];

const getTable = (size: any) => {
  return (
    <TableContainer component={Paper}>
      <Table size={size} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>{size} table</b></TableCell>
            <TableCell align="right">Value 1</TableCell>
            <TableCell align="right">Value 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export const MuiTableGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Table
      </Typography>
      <MuiInputContainer>
      {getTable('small')}
      {getTable('medium')}
      </MuiInputContainer>
    </>
  );
}
