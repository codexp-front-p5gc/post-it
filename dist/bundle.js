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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listaNotas_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_formNotas_js__ = __webpack_require__(3);

// import FormInput from './components/formInput.js';
// import FormTextarea from './components/formTextarea.js';
// import FormButton from './components/formButton.js';


let secao = document.getElementsByClassName('notes')[0];
const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

const listaNotas = new __WEBPACK_IMPORTED_MODULE_0__listaNotas_js__["a" /* default */](observaMudancasNaLista);

const atualizarSecao = secao => {
    // let conteudoSecao = "";

    while (secao.firstChild) {
        secao.removeChild(secao.firstChild);
    }

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);

        // let formNotas = document.createElement('form');
        // formNotas.setAttribute('class', 'note');

        // let inputTitulo = new FormInput({
        //     className: 'note__title',
        //     type: 'text',
        //     name: 'titulo',
        //     placeholder: 'Título',
        //     value: notaAtual.titulo
        // });

        // let textareaTexto = new FormTextarea({
        //     className: 'note__body', 
        //     name: 'texto', 
        //     placeholder: 'Criar uma nota...', 
        //     children: notaAtual.texto
        // });

        // let buttonConcluido = new FormButton({
        //     className: 'note__control', 
        //     type: 'button', 
        //     value: 'Concluído',
        //     click: () => {
        //         adicionarNota(formNotas, inputTitulo, textareaTexto, posicao);
        //     }
        // });

        // formNotas.appendChild(inputTitulo);
        // formNotas.appendChild(textareaTexto);
        // formNotas.appendChild(buttonConcluido);

        // if (notaAtual.editando) {
        //     conteudoSecao += `<form class="note">
        //                         <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
        //                         <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">
        //                             ${notaAtual.texto}
        //                         </textarea>
        //                         <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${posicao})">
        //                             Concluído
        //                         </button>
        //                       </form>`;
        // } else {
        //     conteudoSecao += `<form class="note" onclick="editarFormulario(${posicao})">
        //                         <button class="note__control" type="button" onclick="removerNota(event, ${posicao})">
        //                             <i class="fa fa-times" aria-hidden="true"></i>
        //                         </button>
        //                         <h1 class="note__title">${notaAtual.titulo}</h1>
        //                         <p class="note__body">${notaAtual.texto}</p>
        //                       </form>`;
        // }

        // property shorthand
        const props = {posicao, notaAtual, editarFormulario, adicionarNota, removerNota };
        secao.appendChild(new __WEBPACK_IMPORTED_MODULE_1__components_formNotas_js__["a" /* default */](props));
    }

    // secao.innerHTML = conteudoSecao;
}

window.editarFormulario = posicao => listaNotas.edita(posicao);

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

    remove(posicao, quantidade) {
        this._listaInterna.splice(posicao, 1);
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

/* harmony default export */ __webpack_exports__["a"] = (Nota);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formInput_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formButton_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formTextArea_js__ = __webpack_require__(7);
// importar form e itens que compoem o form





// criar inputTitulo
let inputTitulo = (notaAtual) => {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        value: notaAtual.titulo,
        placeholder: 'Titulo',
        readonly: notaAtual.editando ? false : true,
    }

    return new __WEBPACK_IMPORTED_MODULE_1__formInput_js__["a" /* default */](props);
}

// criar textareaTexto

let textAreaTexto = (notaAtual) => {
    const props = {
        className: 'note__body',
        name: 'texto',
        rows: '5',
        placeholder: 'Criar uma nota...',
        value: notaAtual.texto,
        readonly: notaAtual.editando ? false : true,
    }

    return new __WEBPACK_IMPORTED_MODULE_3__formTextArea_js__["a" /* default */](props);
}

// criar buttonConcluido
let buttonConcluido = (adicionarNota, inputTitulo, textareaTexto, formulario, posicao) => {
    const props = {
        className: 'note__control',
        type: 'buttoon',
        texto: 'Concluido',
        click: () => {
            adicionarNota(inputTitulo, textareaTexto, formulario, posicao);
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_2__formButton_js__["a" /* default */](props);
}

// Definir SE e criar button buttonRemover



let buttonRemover = (notaAtual,posicao) => {

    const props = {
        className: 'note__control',
        type: 'button',
        texto: '<i class="fa fa-times" aria-hidden="true"></i>',
        click: (evento) => {
            removerNota(evento, posicao);
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_2__formButton_js__["a" /* default */](props);
}

// Criar novo Form, chamando os itens criados anteriormente como children.
function FormNotas (props) {
    let formulario;
    let input = inputTitulo(props.notaAtual);
    let textArea = textAreaTexto(props.notaAtual);
    let buttonAdicionar = buttonConcluido(props.adicionarNota, input, textArea, formulario, props.posicao);
    let buttonExcluir = buttonRemover(props.notaAtual);
    
    const propsForm = {
        className: 'note',
        children: props.notaAtual.editando ? [buttonExcluir, input, textArea, buttonAdicionar] : [input, textArea],
        click: props.notaAtual.editando ? () => {} : () => props.editarFormulario(props.posicao),

    };

    formulario = new __WEBPACK_IMPORTED_MODULE_0__form_js__["a" /* default */](propsForm);
    
    return formulario;
}

/* harmony default export */ __webpack_exports__["a"] = (FormNotas);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// props param
function Form(props) {
    let form = document.createElement('form');

    // destructuring
    form.setAttribute('class', props.className);
    
    // forEach
    for (var i = 0; i < props.children.length; i++) {
        form.appendChild(props.children[i]);
    }

    form.addEventListener("click", props.click);
    
    return form;
}

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function FormInput(propriedades) {

    let formInput = document.createElement('input');

    //destructuring
    formInput.setAttribute('class', propriedades.className);
    formInput.setAttribute('type', propriedades.type);
    formInput.setAttribute('name', propriedades.name);
    formInput.setAttribute('value', propriedades.value);
    formInput.setAttribute('placeholder', propriedades.placeholder);


    // qualquer valor é true
    if (propriedades.readonly) {
        formInput.setAttribute('readonly', true);
    }

    return formInput;
}

/* harmony default export */ __webpack_exports__["a"] = (FormInput);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function FormButton(props) {

  let formButton = document.createElement('button');
  formButton.setAttribute('class', props.className);
  formButton.setAttribute('type', props.type);
  formButton.addEventListener('click', props.click);

  formButton.innerHTML = props.texto;
  return formButton;
}

/* harmony default export */ __webpack_exports__["a"] = (FormButton);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// props param
function FormTextArea(props) {
    let formTextarea = document.createElement('textarea');

    // destructuring
    formTextarea.setAttribute('class', props.className);
    formTextarea.setAttribute('name', props.name);
    formTextarea.setAttribute('rows', props.rows);
    formTextarea.setAttribute('placeholder', props.placeholder);

    // qualquer valor é true
    if (props.readonly) {
        formTextarea.setAttribute('readonly', true);
    }

    formTextarea.innerHTML = props.children;

    return formTextarea;
}

/* harmony default export */ __webpack_exports__["a"] = (FormTextArea);

/***/ })
/******/ ]);