import { useState } from 'react';
import fotoMacaron from '../images/image-macaron-desktop.jpg';

function Macaron({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 3,
    nome: 'Macaron Mix of Five',
    preco: 8.0,
    imagem: fotoMacaron,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="macaron">
      <div className="image-container">
        <img src={fotoMacaron} alt="Macaron Mix of Five" />

        <div className="button-group">
          <button
            className="remove"
            onClick={() => setQuantidade((prev) => Math.max(prev - 1, 0))}
          >
            -
          </button>

          <button className="add-to-cart">
            {quantidade === 0 ? 'Add to cart' : quantidade}
          </button>

          <button className="add" onClick={handleAdicionar}>
            +
          </button>
        </div>
      </div>

      <h4>Macaron</h4>
      <h3>Macaron Mix of Five</h3>
      <p>$8.00</p>
    </div>
  );
}

export default Macaron;
