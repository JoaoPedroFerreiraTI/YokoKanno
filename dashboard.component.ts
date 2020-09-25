import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Music } from '../music';
import { MusicService } from '../music.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
/* Instancia uma musica 'musicas' via interface 'Music', com id e nome, que é predefinido como vazio  */
musicas: Music[] = [];

/* Construtor da classe que recebe 'musicervice', uma variavel da classe
   'MusicService' como parâmetro */
constructor(private musicService: MusicService) { }

/* Método 'ngOnInit', que chama o metodo 'getMusicas' */
ngOnInit() {
  this.getMusicas();
}

/* Método que implemmenta 'musicService' recebido no construtor para inserir as musicas que
   'musicService' recebe da constante 'MUSICAS', e pega as primeiras 8 musicas */
getMusicas(): void {
  this.musicService.getMusicas()
    .subscribe(musicas => this.musicas = musicas.slice(0, 8));
}

}
