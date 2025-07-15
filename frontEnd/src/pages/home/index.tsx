import { useState } from "react";
import CardProfissional from "../../components/CardProfissional";
import "./style.css"; // se quiser separar o CSS

const profissionais = [
  {
    fotoUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=400&q=80",
    nome: "Oficina João",
    localizacao: "São Paulo, SP",
    servicos: ["Mecânico", "Revisão", "Troca de óleo"],
    nota: 4.8,
  },
  {
    fotoUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    nome: "Pinturas Maria",
    localizacao: "Rio de Janeiro, RJ",
    servicos: ["Pintura residencial", "Reformas"],
    nota: 4.5,
  },
  {
    fotoUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    nome: "Eletricista Carlos",
    localizacao: "Belo Horizonte, MG",
    servicos: ["Eletricista", "Manutenção elétrica"],
    nota: 4.9,
  },
];

export default function Home() {
  const [busca, setBusca] = useState("");

  const profissionaisFiltrados = profissionais.filter((prof) => {
    const buscaLower = busca.toLowerCase();

    return (
      prof.nome.toLowerCase().includes(buscaLower) ||
      prof.localizacao.toLowerCase().includes(buscaLower) ||
      prof.servicos.some((serv) => serv.toLowerCase().includes(buscaLower))
    );
  });

  return (
    <div className="home-container">
      {/* BARRA DE PESQUISA */}
      <div className="busca-container">
        <input
          type="text"
          placeholder="Buscar por nome, serviço ou localização"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="input-busca"
        />
        <button className="botao-busca">Pesquisar</button>
      </div>

      {/* TÍTULO */}
      <h2 className="titulo-lista">Profissionais em destaque</h2>

      {/* LISTAGEM */}
      <div className="cards-container">
        {profissionaisFiltrados.length > 0 ? (
          profissionaisFiltrados.map((prof, i) => (
            <CardProfissional
              key={i}
              fotoUrl={prof.fotoUrl}
              nome={prof.nome}
              localizacao={prof.localizacao}
              servicos={prof.servicos}
              nota={prof.nota}
            />
          ))
        ) : (
          <p>Nenhum profissional encontrado.</p>
        )}
      </div>
    </div>
  );
}
