import { useState } from 'react';
import fotoCake from '../images/image-cake-desktop.jpg';

function Cake({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 7,
    nome: 'Red Velvet Cake',
    preco: 4.5,
    imagem: fotoCake,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="cake">
      <div className="image-container">
        <img src={fotoCake} alt="Red Velvet Cake" />

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

      <h4>Cake</h4>
      <h3>Red Velvet Cake</h3>
      <p>$4.50</p>
    </div>
  );
}

export default Cake;
