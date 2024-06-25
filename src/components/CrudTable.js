import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({data}) => {
  return (
    <div>
      <h3>Tabla</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el}/>)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
