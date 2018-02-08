class Nota {
    constructor(novoTitulo, novoTexto) {
        // modificadores visibilidade
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = false;
    }

    // getters/setters
    get titulo() {
        return this._titulo;
    }

     set titulo(tituloAlterado) {
        this._titulo = tituloAlterado;
    }

    get texto() {
        return this._texto;
    }

    set texto(textoAlterado) {
        this._texto = textoAlterado;
    }

    get editando() {
        return this._editando;
    }

    set editando(editandoAlterado) {
        this._editando = editandoAlterado;
    }
}

export default Nota;