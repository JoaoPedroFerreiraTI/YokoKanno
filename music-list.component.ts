import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Music } from '../music';
import { MusicService } from '../music.service'

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  /* Instancia uma variavel 'musicas' via interface 'Music', com id e nome  */
  musicas: Music[];
  /* Construtor da classe que recebe 'musicService' como parâmetro */
  constructor(private musicService: MusicService) { }
  
  /* Método 'ngOnInit', que chama o metodo 'getMusicas' */
  ngOnInit() {
    this.getMusicas();
  }
  
   /* Método 'getMusicas' que recupera a lista de 'musicService', que pega a lista de musicas de 
      'musicService' para instanciar a lista da constante 'MUSICAS' */
  getMusicas(): void {
    this.musicService.getMusicas()
    .subscribe(musicas => this.musicas = musicas);
  }


}
