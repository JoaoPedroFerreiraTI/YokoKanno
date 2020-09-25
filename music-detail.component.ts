import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { MusicService } from '../music.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  music: Music;
  /* Construtor da calsse que instancia 3 objetos:
     1)'route' do tipo 'ActivatedRoute', que passa informações sobre a tela atual
     2)'heroService' de 'HeroService', que alimenta a parte de mensagens da lista
     3)'location' de 'Location', que passa informações para a URL da pagina */
   constructor(  
     private route: ActivatedRoute,
     private musicService: MusicService,
     private location: Location
     ) { }
   /* Metodo 'OnInit' que chama o método 'getHero' */
   ngOnInit() {
     this.getMusica();
   }
   /* Método 'getMusica', que pega a id selecionado e compara com a 'music'   */
   getMusica(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.musicService.getMusica(id)
       .subscribe(music => this.music = music);
   }
   /* Método 'goBack', que volta a pagina anterior */
   goBack(): void {
     this.location.back();
   }
}
