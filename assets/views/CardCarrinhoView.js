import { Produto } from "../models/Produto.js";

const CardCarrinhoView = class CardCarrinhoView {

    constructor({nome, descricao, categoria, preco, imagem, id}) {
        this._produto = new Produto(nome, descricao, categoria, preco, imagem, id);
    }

    template() {
        return `
        <div class="container_carrinho-lista-produto" id=car-${this._produto.id}>
            <figure class="container_carrinho-lista-produto-imagem">
                <img src=${this._produto.imagem} alt="imagem produto">
                <figcaption></figcaption>
            </figure>
            <section class="container_carrinho-lista-produto-descricao">
                <h3>${this._produto.nome}</h3>
                <p>${this._produto.categoria}</p>
                <span>R$ ${this._produto.preco}</span>
            </section>
            <figure class="container_carrinho-lista-produto-lixeira botao-lixeira-carrinho">
                <img src="../assets/img/icone lixeira.svg" alt="Icone lixeira">
                <figcaption>Icone lixeira</figcaption>
            </figure>
        </div>
        `
    }

}

export { CardCarrinhoView }