export default class RespostaModel {

    private valor: string
    private certa: boolean
    private revelada: boolean

    constructor(valor: string, certa: boolean, revelada: false) {
        this.valor = valor
        this.certa = certa
        this.revelada = revelada
    }

    public getValor() {
        return this.valor
    }

    public getCerta() {
        return this.certa
    }

    public getRevelada() {
        return this.revelada
    }
}