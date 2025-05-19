import { useState } from 'react';
import fotoPie from '../images/image-tiramisu-desktop.jpg';

function Pie({ adicionarAoCarrinho }) {
  const [quantidade, setQuantidade] = useState(0);

  const produto = {
    id: 6,
    nome: 'Lemon Meringue Pie',
    preco: 5.0,
    imagem: fotoPie,
  };

  const handleAdicionar = () => {
    setQuantidade((prev) => prev + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="pie">
      <div className="image-container">
        <img src={fotoPie} alt="Lemon Meringue Pie" />

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

      <h4>Pie</h4>
      <h3>Lemon Meringue Pie</h3>
      <p>$5.00</p>
    </div>
  );
}

export default Pie;

