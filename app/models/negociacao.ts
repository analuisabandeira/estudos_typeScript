export class Negociacao {

    // private _data:Date;
    // private _quantidade:number;
    // private _valor:number;

    constructor(
        private  _data:Date, // Só permite leitura do valor da prop
        public readonly _quantidade:number, 
        public readonly _valor:number = 100
    ) {}

    get data(): Date {

        const data = new Date(this._data.getTime());
        return data;
    }

    // get quantidade(): number {

    //     return this._quantidade;
    // }

    // get valor(): number {

    //     return this._valor;
    // }

    // setValor(valor:number) {

    //     this._valor = valor;
    // }

    // valorNegociacao() {

    //     return this._valor;
    // }

    get volume(): number {

        return this._quantidade * this._valor;
    }
}