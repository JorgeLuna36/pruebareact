import React, { useState, useEffect } from "react";

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

  const handleInit = (e)=>{
    initDb();
  }

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
        <input
          type="text"
          name="marca"
          placeholder="marca"
          onChange={handleChange}
          value={form.marca}
        />
        <input
          type="text"
          name="modelo"
          placeholder="modelo"
          onChange={handleChange}
          value={form.modelo}
        />
        <input type="submit" value={"Añadir"} />
        <input type="reset" value={"Limpiar/Volver"} onClick={handleReset} />
        <input type="reset" value={"Reiniciar"} onClick={handleInit} />
      </form>
    </div>
  );
};

export default CrudForm;
