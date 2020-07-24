import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioCliComponent } from './exercicio-cli/exercicio-cli.component';
import { ExercicioTituloComponent } from './exercicio-cli/exercicio-titulo/exercicio-titulo.component';
import { ExercicioTabelaComponent } from './exercicio-cli/exercicio-tabela/exercicio-tabela.component';


@NgModule({
  declarations: [
    AppComponent,
    ExercicioCliComponent,
    ExercicioTituloComponent,
    ExercicioTabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
