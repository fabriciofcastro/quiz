import RespostaModel from "./resposta"

export default class QuestaoModel {

    private id: number
    private enunciado: string
    private respostas: RespostaModel[]
    private acertou: boolean
  //  #respondida: boolean

  constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou: false) {
    this.id = id
    this.enunciado = enunciado
    this.respostas = respostas
    this.acertou = acertou
  }

  public getId() {
    return this.id 
  }

  public getEnunciado() {
    return this.enunciado
  }

  public getResposta() {
    return this.respostas
  }

  public getcertou() {
    return this.acertou
  }

  public getRespondida() {
    for(let resposta of this.respostas) {
      if(resposta.revelada) return true 
    }

    return false
  }
}