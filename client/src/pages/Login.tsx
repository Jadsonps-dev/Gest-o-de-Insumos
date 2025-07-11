import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Warehouse, Building, User, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!login || !senha || !empresa) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.post("/login", {
        usuario: login,
        senha,
        empresa,
      });

      // Salva o login e senha se lembrar
      if (remember) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            usuario: login,
            senha: senha,
          })
        );
      } else {
        localStorage.removeItem("auth");
      }

      // Sinaliza que está autenticado
      localStorage.setItem("isAuthenticated", "true");

      // Redireciona para o dashboard
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao logar");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Overlay escuro */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Card centralizado */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem",
            gap: "0.25rem", // espaço pequeno entre imagem e texto
          }}
        >
          <img
            src="https://luft.com.br/wp-content/uploads/2013/11/filialmt.png"
            alt="Logo Luft"
            style={{
              width: "220px",
              height: "auto",
              objectFit: "contain",
              marginBottom: 0,
            }}
          />
          <p
            style={{
              fontSize: "1.125rem",
              color: "#007bff",
              fontWeight: 500,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              letterSpacing: "0.5px",
              margin: 0,
              padding: 0,
              textAlign: "center",
            }}
          >
            Gestão de Insumos
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} style={{ padding: "1.5rem" }}>
          {/* Mensagem de erro */}
          {error && (
            <div
              style={{
                backgroundColor: "#f8d7da",
                border: "1px solid #dc3545",
                color: "#721c24",
                padding: "0.75rem",
                borderRadius: "0.25rem",
                marginBottom: "1rem",
              }}
            >
              {error}
            </div>
          )}

          {/* Campo: Empresa */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="empresa"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                color: "#495057",
              }}
            >
              Empresa
            </label>
            <div style={{ position: "relative" }}>
              <Building
                size={16}
                strokeWidth={2}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#adb5bd",
                }}
              />
              <select
                id="empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                style={{
                  padding: "0.75rem 1.5rem",
                  paddingLeft: "3rem",
                  borderRadius: "0.25rem",
                  border: "1px solid #ced4da",
                  width: "100%",
                  boxSizing: "border-box",
                  fontSize: "0.875rem",
                  color: "#495057",
                  backgroundColor: "#fff",
                  appearance: "none",
                }}
              >
                <option value="">Selecione sua empresa</option>
                <option value="Alpargatas">Alpargatas</option>
                <option value="Insider">Insider</option>
                <option value="ModaB">ModaB</option>
                <option value="Alcance Jeans">Alcance Jeans</option>
                <option value="Amaro">Amaro</option>
                <option value="Sleepo">Sleepo</option>
                <option value="Linus">Linus</option>
              </select>
            </div>
          </div>

          {/* Campo: Usuário */}
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            <label
              htmlFor="login"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                color: "#495057",
              }}
            >
              Usuário
            </label>
            <div style={{ position: "relative" }}>
              <User
                size={16}
                strokeWidth={2}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#adb5bd",
                }}
              />
              <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Digite seu nome de usuário"
                style={{
                  padding: "0.75rem 1.5rem",
                  paddingLeft: "3rem",
                  borderRadius: "0.25rem",
                  border: "1px solid #ced4da",
                  width: "100%",
                  boxSizing: "border-box",
                  fontSize: "0.875rem",
                  color: "#495057",
                  backgroundColor: "#fff",
                }}
              />
            </div>
          </div>

          {/* Campo: Senha */}
          <div
            style={{
              position: "relative",
              marginBottom: "1rem",
            }}
          >
            <label
              htmlFor="senha"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                color: "#495057",
              }}
            >
              Senha
            </label>
            <div style={{ position: "relative" }}>
              <Lock
                size={16}
                strokeWidth={2}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#adb5bd",
                }}
              />
              <input
                id="senha"
                type={showPassword ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                style={{
                  padding: "0.75rem 1.5rem",
                  paddingLeft: "3rem",
                  borderRadius: "0.25rem",
                  border: "1px solid #ced4da",
                  width: "100%",
                  boxSizing: "border-box",
                  fontSize: "0.875rem",
                  color: "#495057",
                  backgroundColor: "#fff",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0",
                  fontSize: "1rem",
                  color: "#adb5bd",
                }}
              >
                {showPassword ? (
                  <EyeOff size={16} strokeWidth={2} />
                ) : (
                  <Eye size={16} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>

          {/* Checkbox: Lembrar-me */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <input
              id="rememberMe"
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              style={{
                marginRight: "0.5rem",
                accentColor: "#007bff",
              }}
            />

            <label
              htmlFor="rememberMe"
              style={{
                fontSize: "0.875rem",
                color: "#495057",
              }}
            >
              Salvar usuário e senha
            </label>
          </div>

          {/* Botão de login */}
          <button
            type="submit"
            disabled={!login || !senha || !empresa}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.25rem",
              backgroundColor:
                !login || !senha || !empresa ? "#ced4da" : "#007bff",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              cursor: !login || !senha || !empresa ? "not-allowed" : "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
