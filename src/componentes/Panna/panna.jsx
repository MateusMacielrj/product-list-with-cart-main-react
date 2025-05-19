import { useState } from 'react';
import fotoPanna from '../images/image-panna-cotta-desktop.jpg';

function Panna({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 9,
    nome: 'Vanilla Panna Cotta',
    preco: 6.5,
    imagem: fotoPanna,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="panna">
      <div className="image-container">
        <img src={fotoPanna} alt="Vanilla Panna Cotta" />

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

      <h4>Panna Cotta</h4>
      <h3>Vanilla Panna Cotta</h3>
      <p>$6.50</p>
    </div>
  );
}

export default Panna;
