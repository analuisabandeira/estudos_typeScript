export class Negociacoes {
    constructor() {
        // private negociacoes: Array <Negociacao> = [];  Outra forma de escrever ==>
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //outra forma de escrever ==> readonly Negociacao[] {}
    lista() {
        return this.negociacoes;
    }
}
