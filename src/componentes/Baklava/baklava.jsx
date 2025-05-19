import { useState } from 'react';
import fotoBaklava from '../images/image-baklava-desktop.jpg';

function Blaklava({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 5,
    nome: 'Pistachio Baklava',
    preco: 4.0,
    imagem: fotoBaklava,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="baklava">
      <div className="image-container">
        <img src={fotoBaklava} alt="Pistachio Baklava" />

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

      <h4>Baklava</h4>
      <h3>Pistachio Baklava</h3>
      <p>$4.00</p>
    </div>
  );
}

export default Blaklava;
