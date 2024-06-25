import React from "react";

const CrudTableRow = ({el}) => {
  return (
    <tr>
      <td>{el.id}</td>
      <td>{el.marca}</td>
      <td>{el.modelo}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
