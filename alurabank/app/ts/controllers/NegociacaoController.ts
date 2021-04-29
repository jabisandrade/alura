import { logarTempoDeExecucao, domInject, throttle } from "../helpers/decorators/index";
import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { NegociacaoService, ResponseHandler } from '../services/index';


let timer = 0;

export class NegociacaoController {
  @domInject("#data")
  private _inputData: JQuery;

  @domInject("#quantidade")
  private _inputQuantidade: JQuery;

  @domInject("#valor")
  private _inputValor: JQuery;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

  private _service = new NegociacaoService();


  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  // @logarTempoDeExecucao()
  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, ","));

    if (this._ehDiaUtil(data)) {
      this._mensagemView.update("Informe apenas dias uteis, por favor!");
      return;
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update("Negociação adicionada com sucesso");
  }

  private _ehDiaUtil(data: Date) {
    return (
      data.getDay() == DiaDaSemana.Domingo ||
      data.getDay() == DiaDaSemana.Sabado
    );
  }

// app/ts/controllers/NegociacaoController.ts

// código anterior omitido 

@throttle()
importaDados() {

    this._service
        .obterNegociacoes((res: Response) => {
            if(res.ok) return res;
            throw new Error(res.statusText);
        })
        .then(negociacoes => {
            negociacoes.forEach(negociacao => 
                this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
        });

}
// código posterior omitido
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}
