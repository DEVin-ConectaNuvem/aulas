import { defineRule } from 'vee-validate';

const required = defineRule("required", value => {
    if (!value || value.length === 0) {
        return "Campo obrigatório"
    }

    return true;
});

const placaValida = defineRule("placaValida", value => {
    let regexp = /^[a-zA-Z]{3}-[0-9]{1}[a-zA-Z0-9]{1}[0-9]{2}$/
    
    if (!regexp.test(value)) {
        return "Placa inválida!"
    }
    return true;
});

export { required, placaValida }