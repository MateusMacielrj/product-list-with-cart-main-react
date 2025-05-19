import React, { useState } from 'react';
import Waffle from './componentes/Waffle/waffle';
import Cabecalho from './componentes/Cabecalho/cabecalho';
import Vanilla from './componentes/Vanilla/vanilla';
import Macaron from './componentes/Macaron/macaron';
import Tiramisu from './componentes/Tiramisu/tiramisu';
import Blaklava from './componentes/Baklava/baklava';
import Pie from './componentes/Pie/pie';
import Cake from './componentes/Cake/cake';
import Brownie from './componentes/Brownie/brownie';
import Panna from './componentes/Panna/panna';
import Caixa from './componentes/Caixa/caixa';

import './componentes/Waffle/waffle.css';
import './componentes/Geral/app.css';
import './componentes/Cabecalho/cabecalho.css';
import './componentes/Vanilla/vanilla.css';
import './componentes/Macaron/macaron.css';
import './componentes/Tiramisu/tiramisu.css';
import './componentes/Baklava/baklava.css';
import './componentes/Pie/pie.css';
import './componentes/Cake/cake.css';
import './componentes/Brownie/brownie.css';
import './componentes/Panna/panna.css';
import './componentes/Caixa/caixa.css'

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const itemExistente = prev.find((item) => item.id === produto.id);
      if (itemExistente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  return (
    <div className="App">
      <div className="conteudo">
        <Cabecalho />

        <div className="coluna1">
          <Waffle adicionarAoCarrinho={adicionarAoCarrinho} />
          <Vanilla adicionarAoCarrinho={adicionarAoCarrinho} />
          <Macaron adicionarAoCarrinho={adicionarAoCarrinho} />
        </div>

        <div className="coluna2">
          <Tiramisu adicionarAoCarrinho={adicionarAoCarrinho} />
          <Blaklava adicionarAoCarrinho={adicionarAoCarrinho} />
          <Pie adicionarAoCarrinho={adicionarAoCarrinho} />
        </div>

        <div className="coluna3">
          <Cake adicionarAoCarrinho={adicionarAoCarrinho} />
          <Brownie adicionarAoCarrinho={adicionarAoCarrinho} />
          <Panna adicionarAoCarrinho={adicionarAoCarrinho} />
        </div>
      </div>

      <Caixa carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />
    </div>
  );
}

export default App;
