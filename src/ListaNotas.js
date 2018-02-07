import Nota from './Nota.js';

class ListaNotas {
    constructor(observador) {
        this._listaInterna = [];
        this._observador = observador;
    }

    push(novoTitulo, novoTexto) {
        let nota = new Nota(novoTitulo, novoTexto);
       this._listaInterna.push(nota);
        this._observador();
    }

    splice(posicao, quantidade) {
        this.listaInterna.splice(posicao, 1);
        this._observador();
    }

    edita(posicao) {
        this._listaInterna[posicao].editando = true;
        this._observador();
    }

    salva(posicao, novoTitulo, novoTexto) {
        this._listaInterna[posicao].titulo = novoTitulo;
        this._listaInterna[posicao].texto = novoTexto;
        this._listaInterna[posicao].editando = false;
        this._observador();
    }

    pega(posicao) {
        return this._listaInterna[posicao];
    }

    contaTotal() {
        return this._listaInterna.length;
    }
};

export default ListaNotas;