import {Button, TableRow, TableCell} from "@mui/material";
import React from "react";

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

  let {id} = el;

  return (
    <TableRow>
      <TableCell>{el.id}</TableCell>
      <TableCell>{el.marca}</TableCell>
      <TableCell>{el.modelo}</TableCell>
      <TableCell>
      <Button variant="contained" className="ButtonClear" onClick={()=> setDataToEdit(el)}>Editar</Button>
      <Button variant="contained" className="ButtonReset" onClick={()=> deleteData(id)}>Eliminar</Button>
      </TableCell>
    </TableRow>
  );
};

export default CrudTableRow;
