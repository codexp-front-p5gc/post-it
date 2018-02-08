// importar form e itens que compoem o form
import Form from './form.js';
import FormInput from './formInput.js';
import FormButton from './formButton.js';
import FormTextArea from './formTextArea.js';

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

    return new FormInput(props);
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

    return new FormTextArea(props);
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
    return new FormButton(props);
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
    return new FormButton(props);
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

    formulario = new Form(propsForm);
    
    return formulario;
}

export default FormNotas;