import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';

/* Configura a constante 'routes', que permite a navegação entre components e tem como caminhos 
    possiveis 'MusicListComponent', 'DashboardComponent', 'MusicDetailComponent' e um caminho 
    padrão que leva ao 'dashboard' */
const routes: Routes = [
  { path: 'musicas', component: MusicListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MusicDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
