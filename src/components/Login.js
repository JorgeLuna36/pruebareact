import { Container, TextField, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const initialForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const [correct, setCorrect] = useState(true);

  const navigate = useNavigate();
  const auth = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      alert("Faltan datos");
      return;
    }
    if (form.username === "prueba" && form.password === "prueba123") {
      if (auth.login(form)===true) {
        setCorrect(true);
        //auth.login(form);
        handleReset();
        navigate("/crud");
      }
    } else {
      setCorrect(false);
    }
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <Container className="ContentCenter">
      <h1>Login</h1>
      <form>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              onChange={handleChange}
              isrequired="true"
              helperText={correct ? "" : "Datos incorrectos"}
              value={form.username}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              onChange={handleChange}
              helperText={correct ? "" : "Datos incorrectos"}
              value={form.password}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          className="ButtonAdd"
          type="submit"
          onClick={handleSubmit}
        >
          Iniciar Sesion
        </Button>
      </form>
    </Container>
  );
};

export default Login;
