import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  { id: 1, marca: "Samsung", modelo: "S21" },
  { id: 2, marca: "Samsung", modelo: "J7" },
  { id: 3, marca: "Apple", modelo: "14" },
  { id: 4, marca: "Xiaomi", modelo: "Mi11" },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  return (
    <div>
      <h1>Crud</h1>
      <CrudForm
        //createData={createData}
        //updateData={updateDate}
        //dataToEdit={dataToEdit}
        //setDataToEdit={setDatatoEdit}
      />
      <CrudTable
        data={db}
        //setDataToEdit={setDatatoEdit}
        //deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
