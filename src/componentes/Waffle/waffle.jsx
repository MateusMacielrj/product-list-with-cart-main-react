import { useState } from 'react';
import fotoMorango from '../images/image-waffle-desktop.jpg';

function Waffle({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 1,
    nome: 'Waffle with Berries',
    preco: 6.5,
    imagem: fotoMorango,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="waffle-morango">
      <div className="image-container">
        <img src={fotoMorango} alt="Waffle with berries" />

        <div className="button-group">
          <button
            className="remove"
            onClick={() => setQuantidade((prev) => Math.max(prev - 1, 0))}
          >
            -
          </button>

          <button className="add-to-cart">{quantidade === 0 ? 'Add to cart' : quantidade}</button>

          <button className="add" onClick={handleAdicionar}>
            +
          </button>
        </div>
      </div>

      <h4>Waffle</h4>
      <h3>Waffle with Berries</h3>
      <p>$6.50</p>
    </div>
  );
}

export default Waffle;
