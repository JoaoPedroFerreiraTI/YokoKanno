import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { MusicListComponent } from './music-list/music-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicDetailComponent,
    MusicListComponent,
    DashboardComponent,    
    NotificacoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
