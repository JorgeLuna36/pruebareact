import React from "react";
import Login from "./components/Login";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import CrudApp from "./components/CrudApp";
import PrivateRoute from "./auth/ProtectedRoutes";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/crud" element={<CrudApp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
