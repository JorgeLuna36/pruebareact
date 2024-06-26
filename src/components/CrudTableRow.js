import React from "react";

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

  let {id} = el;

  return (
    <tr>
      <td>{el.id}</td>
      <td>{el.marca}</td>
      <td>{el.modelo}</td>
      <td>
        <button onClick={()=> setDataToEdit(el)}>Editar</button>
        <button onClick={()=> deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
