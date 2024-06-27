import React from "react";
import CrudTableRow from "./CrudTableRow";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <Container className="ContentCenter">
      <h3>Tabla</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={"4"}>Sin Datos</TableCell>
              </TableRow>
            ) : (
              data.map((el) => (
                <CrudTableRow
                  key={el.id}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CrudTable;
