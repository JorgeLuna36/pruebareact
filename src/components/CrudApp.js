import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Button, Container } from "@mui/material";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const initialDb = [
  { id: 1, marca: "Samsung", modelo: "S21" },
  { id: 2, marca: "Samsung", modelo: "J7" },
  { id: 3, marca: "Apple", modelo: "14" },
  { id: 4, marca: "Xiaomi", modelo: "Mi11" },
];

const CrudApp = () => {
  const getDb = () => {
    const saveDb = window.localStorage.getItem("db");
    if (saveDb) {
      return JSON.parse(saveDb);
    } else {
      return [];
    }
  };
  const [db, setDb] = useState(getDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem("db", JSON.stringify(db));
  }, [db]);

  const createData = (data) => {
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

  const initDb = () => {
    setDb(initialDb);
  };

  const logout1 = () => {
    navigate(auth.logout());
  };

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
      <Button
        variant="contained"
        className="ButtonClear"
        type="reset"
        onClick={logout1}
      >
        Cerrar Sesion
      </Button>
    </Container>
  );
};

export default CrudApp;
