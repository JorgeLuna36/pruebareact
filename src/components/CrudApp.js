import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Container } from "@mui/material";
import '../App.css';

const initialDb = [
  { id: 1, marca: "Samsung", modelo: "S21" },
  { id: 2, marca: "Samsung", modelo: "J7" },
  { id: 3, marca: "Apple", modelo: "14" },
  { id: 4, marca: "Xiaomi", modelo: "Mi11" },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    //data.id = Date.now();
    data.id = db.length + 1;
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("Eliminar?");
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  const initDb = ()=>{
    setDb(initialDb);
  }
  return (
    <Container className="ContentCenter">
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        initDb={initDb}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </Container>
  );
};

export default CrudApp;
