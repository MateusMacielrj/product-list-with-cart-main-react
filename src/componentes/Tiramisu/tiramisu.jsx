import { useState } from 'react';
import fotoTiramisu from '../images/image-tiramisu-desktop.jpg';

function Tiramisu({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 4,
    nome: 'Classic Tiramisu',
    preco: 5.5,
    imagem: fotoTiramisu,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="tiramisu">
      <div className="image-container">
        <img src={fotoTiramisu} alt="Classic Tiramisu" />

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

      <h4>Tiramisu</h4>
      <h3>Classic Tiramisu</h3>
      <p>$5.50</p>
    </div>
  );
}

export default Tiramisu;
