import { useState } from 'react';
import './caixa.css'; // Supondo que você tenha um arquivo de estilo para o componente

function Caixa({ carrinho }) {
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  const handleConfirmarPedido = () => {
    setPedidoConfirmado(true);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco * produto.quantidade, 0).toFixed(2);
  };

  return (
    <div className="caixa">
      <h2>Resumo do Pedido</h2>

      <div className="itens-carrinho">
        {carrinho.length === 0 ? (
          <p>Nenhum item no carrinho</p>
        ) : (
          carrinho.map((produto, index) => (
            <div key={index} className="item-carrinho">
              <img src={produto.imagem} alt={produto.nome} />
              <div>
                <h4>{produto.nome}</h4>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Preço: ${produto.preco}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {carrinho.length > 0 && (
        <>
          <div className="total">
            <h3>Total: ${calcularTotal()}</h3>
          </div>

          <button className="confirmar-pedido" onClick={handleConfirmarPedido}>
            Confirmar Pedido
          </button>
        </>
      )}

      {pedidoConfirmado && (
        <div className="mensagem-confirmacao">
          <p>Pedido confirmado! 🛒</p>
        </div>
      )}
    </div>
  );
}

export default Caixa;
