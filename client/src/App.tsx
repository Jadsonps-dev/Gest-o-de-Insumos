// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Entrada from "./pages/Entrada";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/entrada"
          element={
            <PrivateRoute>
              <Entrada />
            </PrivateRoute>
          }
        />
        {/* Adicione outras rotas privadas da mesma forma */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
