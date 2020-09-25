import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from '../notificacao.service'
@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent implements OnInit {

  constructor(public notificacaoService:NotificacaoService) { }

  ngOnInit(): void {
  }

}
