"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var qualqueCoisa = "Olá";

var Nota = function () {
    function Nota(novoTitulo, novoTexto, editando) {
        _classCallCheck(this, Nota);

        this._titulo = novoTitulo, this._texto = novoTexto, this._editando = editando;
    }
    // getters / setters


    _createClass(Nota, [{
        key: "titulo",
        get: function get() {
            return this._titulo;
        },
        set: function set(tituloAlterado) {
            if (tituloAlterado !== null && tituloAlterado.length > 5) {
                this._titulo = tituloAlterado;
            } else {
                alert("Preencha o título!");
            }
        }
    }, {
        key: "texto",
        get: function get() {
            return this._texto;
        }
    }, {
        key: "editando",
        get: function get() {
            return this._editando;
        }
    }]);

    return Nota;
}();

var ListaNotas = function () {
    function ListaNotas() {
        _classCallCheck(this, ListaNotas);

        this._secao = document.getElementsByClassName("notes")[0];
        this._listaInterna = [];
    }

    _createClass(ListaNotas, [{
        key: "adiciona",
        value: function adiciona(novoTitulo, novoTexto) {
            var _nota = new Nota(novoTitulo, novoTexto);
            this.listaInterna.push(nota);
            atualizarSecao(this._secao);
        }
    }, {
        key: "remove",
        value: function remove(posicao) {
            this.listaInterna.splice(posicao, 1);
            atualizarSecao(this._secao);
        }
    }, {
        key: "edita",
        value: function edita(posicao) {
            this.listaInterna[posicao].editando = true;
            atualizarSecao(this._secao);
        }
    }, {
        key: "salva",
        value: function salva(posicao, novoTitulo, novoTexto) {
            this.listaInterna[posicao].titulo = novoTitulo;
            this.listaInterna[posicao].texto = novoTexto;
            this.listaInterna[posicao].editando = false;
            atualizarSecao(this._secao);
        }
    }, {
        key: "pega",
        value: function pega(posicao) {
            return this.listaInterna[posicao];
        }
    }, {
        key: "contaTotal",
        value: function contaTotal() {
            return this.listaInterna.length;
        }
    }]);

    return ListaNotas;
}();

;

var atualizarSecao = function atualizarSecao(secao) {
    var conteudoSecao = "";

    for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        var notaAtual = listaNotas.pega(posicao);
        if (notaAtual.editando) {
            conteudoSecao += "<form class=\"note\">\n                              <input class=\"note__title\" type=\"text\" name=\"titulo\" value=\"" + notaAtual.titulo + "\" placeholder=\"T\xEDtulo\">\n                              <textarea class=\"note__body\" name=\"texto\" rows=\"5\" placeholder=\"Criar uma nota...\">" + notaAtual.texto + "</textarea>\n                              <button class=\"note__control\" type=\"button\" onclick=\"adicionarNota(this.form.titulo, this.form.texto, this.form, " + posicao + ")\">\n                                  Conclu\xEDdo\n                              </button>\n                           </form>";
        } else {
            conteudoSecao += "<form class=\"note\" onclick=\"editaFormulario(" + posicao + ")\">\n                                <button class=\"note__control\" type=\"button\" onclick=\"removerNota(event," + posicao + ")\">\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                                </button>\n                                <h1 class=\"note__title\">" + notaAtual.titulo + "</h1>\n                                <p class=\"note__body\">" + notaAtual.texto + "</p>\n                             </form>";
        }
    }

    secao.innerHTML = conteudoSecao;
};

var editaFormulario = function editaFormulario(posicao) {
    return listaNotas.edita(posicao);
};

var adicionarNota = function adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {

    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
};

var removerNota = function removerNota(evento, posicao) {
    evento.stopPropagation();
    listaNotas.remove(posicao);
};