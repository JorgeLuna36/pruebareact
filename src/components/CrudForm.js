import React, { useState, useEffect } from "react";
import {Button, TextField} from "@mui/material";

const initialForm = {
  id: null,
  marca: "",
  modelo: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit, initDb }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.marca || !form.modelo) {
      alert("Faltan datos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  const Titulo = () => {
    if(dataToEdit){
      return <h3>Editar</h3>;
    }else{
      return <h3>Añadir</h3>;
    }
  };

  return (
    <div>
      <Titulo/>
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Marca" variant="standard" className="TextFieldForm" name="marca" onChange={handleChange} value={form.marca}/>
        <TextField id="standard-basic" label="Marca" variant="standard" className="TextFieldForm" name="modelo" onChange={handleChange} value={form.modelo}/>
        <Button variant="contained" className="ButtonAdd" type="submit">{dataToEdit ? "Editar":"Añadir"}</Button>
        <Button variant="contained" className="ButtonClear" type="reset" onClick={handleReset}>Limpiar / Volver</Button>
      </form>
    </div>
  );
};

export default CrudForm;
