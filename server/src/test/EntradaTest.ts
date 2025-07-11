import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { Entrada } from "../models/Entrada";

async function testEntrada() {
  let connection;
  try {
    // 1. Conectar ao banco de dados
    connection = await createConnection();
    console.log("✅ Conexão com o banco estabelecida com sucesso!");

    const entradaRepo = getRepository(Entrada);

    // 2. Criar um novo registro de entrada
    const novaEntrada = new Entrada();
    novaEntrada.produto = "Tijolo Baiano";
    novaEntrada.quantidade = 1000;
    novaEntrada.codigo = "TIJ-001";
    novaEntrada.empresa = "Cerâmica Santa Rita";
    novaEntrada.usuario = "jadson.sales";

    // 3. Salvar no banco de dados
    const entradaSalva = await entradaRepo.save(novaEntrada);
    console.log("📝 Registro salvo com ID:", entradaSalva.id);

    // 4. Verificar valores padrão
    console.log("⏱️ Data automática:", entradaSalva.data);
    console.log("🏷️ Tipo padrão:", entradaSalva.tipo);

    // 5. Buscar o registro salvo
    const entradaRecuperada = await entradaRepo.findOne({
      where: { id: entradaSalva.id }
    });
    
    if (entradaRecuperada) {
      console.log("🔍 Registro recuperado:", {
        produto: entradaRecuperada.produto,
        quantidade: entradaRecuperada.quantidade,
        empresa: entradaRecuperada.empresa
      });
    }

    // 6. Testar constraint de código único
    try {
      const entradaDuplicada = new Entrada();
      entradaDuplicada.produto = "Tijolo Baiano";
      entradaDuplicada.quantidade = 500;
      entradaDuplicada.codigo = "TIJ-001"; // Mesmo código!
      entradaDuplicada.empresa = "Outra Cerâmica";
      entradaDuplicada.usuario = "outro.usuario";
      
      await entradaRepo.save(entradaDuplicada);
      console.log("❌ Erro: Código duplicado foi aceito!");
    } catch (error) {
      console.log("🔒 Teste de unicidade: Código duplicado foi bloqueado corretamente");
    }

    console.log("✅ Todos os testes foram executados com sucesso!");
  } catch (error) {
    console.error("❌ Falha durante os testes:", error);
  } finally {
    if (connection) await connection.close();
  }
}

// Executar os testes
testEntrada();