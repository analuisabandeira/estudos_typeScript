import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    // private negociacoes: Array <Negociacao> = [];  Outra forma de escrever ==>
    private negociacoes:  Negociacao[] = [];
    
    adiciona(negociacao: Negociacao) {

        this.negociacoes.push(negociacao);
    }

    //outra forma de escrever ==> readonly Negociacao[] {}

    lista(): ReadonlyArray<Negociacao> { // Tipo que só permite leitura da lista

        return this.negociacoes;
    }
}
