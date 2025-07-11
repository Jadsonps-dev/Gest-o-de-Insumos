import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EntradaInsumos() {
  const [entradas, setEntradas] = useState([
    {
      id: 1,
      data: "08/07/2025 14:30",
      produto: "Parafuso M6x20",
      codigo: "PRF-M6-20",
      quantidade: "500 unidades",
      endereco: "A1-B2-C3",
    },
    {
      id: 2,
      data: "08/07/2025 13:45",
      produto: "Cabo Ethernet CAT6",
      codigo: "CAB-ETH-CAT6",
      quantidade: "50 metros",
      endereco: "D2-E1-F4",
    },
    {
      id: 3,
      data: "08/07/2025 12:15",
      produto: "Resistor 10kΩ",
      codigo: "RES-10K-5%",
      quantidade: "1000 unidades",
      endereco: "G1-H2-I3",
    },
  ]);

  const [formData, setFormData] = useState({
    produto: "",
    codigo: "",
    quantidade: "",
    endereco: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novaEntrada = {
      id: entradas.length + 1,
      data: new Date().toLocaleString("pt-BR"),
      ...formData,
      quantidade: `${formData.quantidade} unidades`,
    };
    setEntradas([novaEntrada, ...entradas]);
    setFormData({
      produto: "",
      codigo: "",
      quantidade: "",
      endereco: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">LUFT LOGISTICS</h1>
        <h2 className="text-xl font-semibold">Entrada de Insumos</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulário de Entrada */}
        <Card className="border rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Cadastrar Entrada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block font-medium">Produto</label>
                <Input
                  value={formData.produto}
                  onChange={(e) =>
                    setFormData({ ...formData, produto: e.target.value })
                  }
                  placeholder="Nome do produto"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Código</label>
                <Input
                  value={formData.codigo}
                  onChange={(e) =>
                    setFormData({ ...formData, codigo: e.target.value })
                  }
                  placeholder="Código do produto"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Quantidade</label>
                <Input
                  type="number"
                  value={formData.quantidade}
                  onChange={(e) =>
                    setFormData({ ...formData, quantidade: e.target.value })
                  }
                  placeholder="Quantidade"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Endereço</label>
                <Input
                  value={formData.endereco}
                  onChange={(e) =>
                    setFormData({ ...formData, endereco: e.target.value })
                  }
                  placeholder="Localização no armazém"
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
              >
                Salvar Entrada
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tabela de Últimas Entradas */}
        <Card className="border rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Últimas Entradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">DATA/HORA</th>
                    <th className="text-left py-2 px-4">PRODUTO</th>
                    <th className="text-left py-2 px-4">CÓDIGO</th>
                    <th className="text-left py-2 px-4">QUANTIDADE</th>
                    <th className="text-left py-2 px-4">ENDEREÇO</th>
                    <th className="text-left py-2 px-4">AÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  {entradas.map((entrada) => (
                    <tr key={entrada.id} className="border-b">
                      <td className="py-2 px-4">{entrada.data}</td>
                      <td className="py-2 px-4">{entrada.produto}</td>
                      <td className="py-2 px-4">{entrada.codigo}</td>
                      <td className="py-2 px-4">{entrada.quantidade}</td>
                      <td className="py-2 px-4">{entrada.endereco}</td>
                      <td className="py-2 px-4">✅</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Mostrando 1 até {entradas.length} de {entradas.length} resultados
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
