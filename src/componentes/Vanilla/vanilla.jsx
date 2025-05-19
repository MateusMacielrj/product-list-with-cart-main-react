import { useState } from "react";
import fotoCreme from "../images/image-creme-brulee-desktop.jpg";

function Vanilla({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 2,
    nome: "Vanilla Bean Crème Brûlée",
    preco: 7.0,
    imagem: fotoCreme,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="creme-vanilla">
      <div className="image-container">
        <img src={fotoCreme} alt="Vanilla Bean Crème Brûlée" />

        <div className="button-group">
          <button
            className="remove"
            onClick={() => setQuantidade((prev) => Math.max(prev - 1, 0))}
          >
            -
          </button>

          <button className="add-to-cart">
            {quantidade === 0 ? "Add to cart" : quantidade}
          </button>

          <button className="add" onClick={handleAdicionar}>
            +
          </button>
        </div>
      </div>
      <h4>Crème Brûlée</h4>
      <h3>Vanilla Bean Crème Brûlée</h3>
      <p>$7.00</p>
    </div>
  );
}

export default Vanilla;
