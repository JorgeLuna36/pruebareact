import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  marca: "",
  modelo: "",
};

const CrudForm = () => {
  const [form, setForm] = useState({ initialForm });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.marca || !form.modelo){
      alert("Faltan datos");
      return;
    }
  };

  return (
    <div>
      <h3>Añadir</h3>
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
      </form>
    </div>
  );
};

export default CrudForm;
