/*Importa a interface 'Component' */
import { Component } from '@angular/core';
/* Utiliza a interface 'Component' definindo o seletor da classe e base de dados para HTML e CSS*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*Exporta a classe 'AppComponent'*/
export class AppComponent {
  title = 'Yoko Kanno';
}
