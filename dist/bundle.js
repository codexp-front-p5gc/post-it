/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListaNotas_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_formInput_js__ = __webpack_require__(3);



let secao = document.getElementsByClassName('notes')[0];
const observaMudancasNaLista = () => {
    atualizarSecao(secao);
}

const listaNotas = new __WEBPACK_IMPORTED_MODULE_0__ListaNotas_js__["a" /* default */](observaMudancasNaLista);

const atualizarSecao = secao => {
    let conteudoSecao = "";

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);
        
        if (notaAtual.editando) {
            let formularioNotas = document.createElement('form');
            formularioNotas.setAttribute('class','note');

            let inputTitulo = new __WEBPACK_IMPORTED_MODULE_1__components_formInput_js__["a" /* default */]();

            let textArea = document.createElement('textarea');
            inputTitulo.setAttribute('class','note__body');
            inputTitulo.setAttribute('name','texto');
            inputTitulo.setAttribute('rows','5');
            inputTitulo.setAttribute('placeholder','Criar uma nota...');
            textareaTexto.innerHTML = notaAtual.texto;

            let button = document.createElement('button');
            inputTitulo.setAttribute('class','note__control');
            inputTitulo.setAttribute('type','button');
            inputTitulo.setAttribute('value','Concluído');
            button.addEventListener('click', adicionarNota(this.form.titulo, this.form.texto, this.form,notaAtual.posicao));
            
            
            conteudoSecao += `<form class="note">
                                <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
                                <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
                                <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${posicao})">
                                    Concluído
                                </button>
                              </form>`;
        } else {
            conteudoSecao += `<form class="note" onclick="editaFormulario(${posicao})">
                                <button class="note__control" type="button" onclick="removerNota(event, ${posicao})">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                                <h1 class="note__title">${notaAtual.titulo}</h1>
                                <p class="note__body">${notaAtual.texto}</p>
                              </form>`;
        }
    }

    secao.innerHTML = conteudoSecao;
}

window.editaFormulario = posicao => listaNotas.edita(posicao);

window.adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.push(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

window.removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nota_js__ = __webpack_require__(2);


class ListaNotas {
    constructor(observador) {
        this._listaInterna = [];
        this._observador = observador;
    }

    push(novoTitulo, novoTexto) {
        let nota = new __WEBPACK_IMPORTED_MODULE_0__Nota_js__["a" /* default */](novoTitulo, novoTexto);
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

/* harmony default export */ __webpack_exports__["a"] = (ListaNotas);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

    get texto() {
        return this._texto;
    }

    get editando() {
        return this._editando;
    }

    set titulo(tituloAlterado) {
        this._titulo = tituloAlterado;
    }

    set texto(textoAlterado) {
        this._texto = textoAlterado;
    }

    set editando(editandoAlterado) {
        this._editando = editandoAlterado;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Nota);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function FormInput() {

    let inputTitulo = document.createElement('input');
    inputTitulo.setAttribute('class', 'note__title');
    inputTitulo.setAttribute('type', 'text');
    inputTitulo.setAttribute('name', 'titulo');
    inputTitulo.setAttribute('value', notaAtual.titulo);
    inputTitulo.setAttribute('placeholder', 'Título');

    return inputTitulo;
}

/* harmony default export */ __webpack_exports__["a"] = (Forminput);

/***/ })
/******/ ]);