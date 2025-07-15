import "./style.css";

type CardProfissionalProps = {
  fotoUrl: string;
  nome: string;
  localizacao: string;
  servicos: string[];
  nota: number;
};

export default function CardProfissional({
  fotoUrl,
  nome,
  localizacao,
  servicos,
  nota,
}: CardProfissionalProps) {
  // Função para renderizar estrelas
  const estrelas = Array.from({ length: 5 }, (_, i) => {
    return i < Math.floor(nota) ? "★" : "☆";
  }).join("");

  return (
    <div className="card-profissional">
      <img src={fotoUrl} alt={`${nome} foto`} className="card-profissional__foto" />

      <div className="card-profissional__info">
        <h3 className="card-profissional__nome">{nome}</h3>
        <p className="card-profissional__localizacao">{localizacao}</p>

        <div className="card-profissional__servicos">
          {servicos.map((servico, index) => (
            <span key={index} className="servico-badge">
              {servico}
            </span>
          ))}
        </div>

        <div className="card-profissional__nota">
          <span className="estrelas">{estrelas}</span> ({nota.toFixed(1)})
        </div>

        <button className="ver-mais-btn">Ver mais</button>
      </div>
    </div>
  );
}
