export class Negociacao {
    // private _data:Date;
    // private _quantidade:number;
    // private _valor:number;
    constructor(_data, // Só permite leitura do valor da prop
    _quantidade, _valor = 100) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
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
    get volume() {
        return this._quantidade * this._valor;
    }
}
