export default class QuestaoModel {

    private id: number
    private ununciado: string
    private resposta: any[]
    private acertou: boolean
  //  #respondida: boolean

  constructor(id: number, enunciado: string, resposta: any[], acertou: false) {
    this.id = id
    this.enunciado = enunciado
    this.resposta = resposta
    this.acertou = acertou
  }

  public getId() {
    return this.id 
  }

  public getEnunciado() {
    return this.enunciado
  }

  public getResposta() {
    return this.resposta
  }

  public getcertou() {
    return this.acertou
  }

  public getRespondida() {
    //FIXME: implementar essa
    return false
  }

}