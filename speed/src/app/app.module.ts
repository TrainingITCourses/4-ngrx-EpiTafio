import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorContainerComponent } from './contenedor-container/contenedor-container.component';
import { BuscadorPresenterComponent } from './buscador-presenter/buscador-presenter.component';
import { ListadoPresenterComponent } from './listado-presenter/listado-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorContainerComponent,
    BuscadorPresenterComponent,
    ListadoPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
