class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Saldo insuficiente!';
        }
        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo += valor;

        return this._saldo;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Saldo insuficiente!'
        }
        
        if (valor > 500) {
            return 'Operação negada!';
        }


        this._saldo -= valor

        return this._saldo
    }
}



/* testes */

const contaCo = new ContaCorrente(1, 234, true);
console.log(contaCo.saldo);
console.log(contaCo.depositar(1000));
console.log(contaCo.sacar(500));
console.log(contaCo.saldo);
console.log(contaCo.sacar(600));

console.log();

const contaPo = new ContaPoupanca(1, 345);
console.log(contaPo.saldo);
console.log(contaPo.depositar(100));
console.log(contaPo.sacar(50));
console.log(contaPo.sacar(100));

console.log();

const contaUni = new ContaUniversitaria(1, 456);
console.log(contaUni.saldo);
console.log(contaUni.depositar(100));
console.log(contaUni.sacar(200));
console.log(contaUni.depositar(1000));
console.log(contaUni.sacar(500));
console.log(contaUni.sacar(550));
