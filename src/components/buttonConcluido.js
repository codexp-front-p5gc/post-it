function ButtonConcluido() {

let button = document.createElement('button');
            inputTitulo.setAttribute('class','note__control');
            inputTitulo.setAttribute('type','button');
            inputTitulo.setAttribute('value','Concluído');
            button.addEventListener('click', adicionarNota(this.form.titulo, this.form.texto, this.form,notaAtual.posicao));

  return buttonConcluido;
}

export 
