class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const camposValidos = this.isValid();
        const senhasValidas = this.validPasswords();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.formulario.submit();
        }
    }

    isValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar vazio!`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if(!this.cpfIsValid(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.userIsValid(campo)) valid = false;
            }
        }
        return valid;
    }

    cpfIsValid(campo) {
        const cpf = new ValidaCpf(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, `CPF Inválido!`)
            return false;
        } 
        return true;
    }

    userIsValid(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, `Usuário deve conter entre 3 e 12 caracteres`);
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, `Usuário deve conter apenas letras e/ou números`);
            valid = false;
        }
        return valid;
    }

    validPasswords() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            this.criaErro(senha, `As senhas devem coincidir!`);
            this.criaErro(repetirSenha, `As senhas devem coincidir!`);
            valid = false;
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, `A senha deve conter entre 6 e 12 caracteres!`);
            valid = false;
        }

        return valid;
    }


    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const teste = new ValidaFormulario();