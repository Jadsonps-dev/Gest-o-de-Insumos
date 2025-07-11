// server/src/server.ts
import "core-js/stable";
import "regenerator-runtime/runtime";

import express from "express";
import cors from "cors";
import { AppDataSource } from "./utils/typeorm.config";
import { createSchemasIfNotExist } from "./utils/init-db";
import authRoutes from "./routes/auth.routes";
import insumoRoutes from "./routes/insumo.routes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/insumos", insumoRoutes);

async function startServer() {
  try {
    // 1️⃣ Cria os schemas usando o driver pg antes do TypeORM
    await createSchemasIfNotExist();

    // 2️⃣ Agora pode iniciar o TypeORM normalmente
    await AppDataSource.initialize();

    app.listen(PORT, () => {
      console.log(`✅ Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar o servidor:", error);
  }
}

startServer();
