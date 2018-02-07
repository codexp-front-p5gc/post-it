import Form from './form.js';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';

const criaInputTitulo = (notaAtual) => {
    return new FormInput({
        className: 'note__title',
        type: 'text',
        name: 'title',
        value: '',
        placeholder: 'Título',
        value: propriedades.notaAtual.titulo,
        // readonly: !propriedades.notaAtual.editando
    });

    if (propriedades.notaAtual.editando) {
        propsInput.readonly =  true;
    }
    

const criaTextareaTexto = (notaAtual) => {
    // immutable
    const props = {
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readonly: !notaAtual.editando,
        children: notaAtual.texto
    };

    return new FormTextarea(props);
};

const criaButtonConcluir = ({ posicao, nota, adicionarNota, salvarNota }, inputTitulo, textareaTexto, formNotas) => {
    // immutable
    const props = {
        className: 'note__control',
        type: 'button',
        children: 'Concluído',
        click: () => adicionarNota(inputTitulo, textareaTexto, formNotas, posicao)
    };

    return new FormButton(props);
};

const criaButtonRemover = ({ posicao, removerNota }) => {
    // immutable
    const props = {
        className: 'note__control',
        type: 'button',
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        click: event => removerNota(event, posicao)
    };

    return new FormButton(props);
};


function FormNotas(propriedades) {
    // destructuring
    const { posicao, notaAtual, editarFormulario } = propriedades;

    let inputTitulo = criaInputTitulo(propriedades.notaAtual),
        textareaTexto = criaTextareaTexto(propriedades),
        buttonConcluido = criaButtonConcluir(propriedades, inputTitulo, textareaTexto, formNotas);

    let funcaoClick;
    if (notaAtual.editando) {
        funcaoClick = () => {
            //nao faco nada
        }
    } else {
        funcaoClick = function() {
            props.editarFormulario(props.posicao);    
        };
    }

    let props = {
        className: 'note',
        // click: notaAtual.editando ? () => { } : () => editarFormulario(posicao),
        children: [inputTitulo, textareaTexto, buttonConcluido]
    };

    if (notaAtual.editando) {
        let buttonRemover = criaButtonRemover(propriedades);
        props.children = [buttonRemover].concat(props.children);
    }

    let formNotas = new Form(props);

    return formNotas;
}

export default FormNotas;