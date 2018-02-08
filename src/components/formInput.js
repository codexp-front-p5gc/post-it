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

export default FormInput;

