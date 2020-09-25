/* Importa a classe 'Injectable' */
import { Injectable } from '@angular/core';
/* Importa a classe 'Observable' */
import { Observable, of } from 'rxjs';
/* Importa a classe 'NotificacaoService' */
import { NotificacaoService } from './notificacao.service';
/* Importa a classe 'Music' */
import { Music } from './music';
/* Importa a constante 'MUSICAS' */
import { MUSICAS } from './repertorio';
  
/* Injectable permite que a classe seja disponibilizada e injetada em outra classe */
@Injectable({
  providedIn: 'root'
})
export class MusicService {
/* Construtor da classe que recebe um 'notificacaoService' */
constructor(private notificacaoService: NotificacaoService) { }
/* Método que implemmenta a interface 'Music' com a classe 'Observable', que adiciona uma mensagem
    e retorna a constante 'MUSICAS', retornando assim a lista de herois presentes em 'MUSICAS' */
    getMusicas(): Observable <Music[]> {
      this.notificacaoService.add('Escolha uma música de Yoko Kanno');
      return of(MUSICAS);
    }
    /* Método que implementa a interface 'Music' com a classe 'Observable', que recebe um 'Id', escreve
       uma mensagem com o id da musica selecionada */
  getMusica(Id: number): Observable<Music> {
    this.notificacaoService.add(`Notificação: Música selecionada: id=${Id}`);
    return of(MUSICAS.find(music => music.Id === Id));
  }
}
