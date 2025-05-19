import { useState } from 'react';
import fotoBrownie from '../images/image-brownie-desktop.jpg';

function Brownie({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 8,
    nome: 'Salted Caramel Brownie',
    preco: 5.5,
    imagem: fotoBrownie,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="brownie">
      <div className="image-container">
        <img src={fotoBrownie} alt="Salted Caramel Brownie" />

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

      <h4>Brownie</h4>
      <h3>Salted Caramel Brownie</h3>
      <p>$5.50</p>
    </div>
  );
}

export default Brownie;
