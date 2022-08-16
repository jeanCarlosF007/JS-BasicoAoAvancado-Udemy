class ValidaCpf {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    
    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfParcial);
        const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1);
        return cpfParcial + digito1 + digito2;
    }

    static geraDigito(valor) {
        let total = 0;
        let regressivo = valor.length + 1;
        for (let stringNumerica of valor) {
            total += Number(stringNumerica) * regressivo--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        return this.geraNovoCpf() === this.cpfLimpo;
    }
}

