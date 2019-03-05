import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { metaReducers, reducers } from './reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorContainerComponent } from './contenedor-container/contenedor-container.component';
import { BuscadorPresenterComponent } from './buscador-presenter/buscador-presenter.component';
import { ListadoPresenterComponent } from './listado-presenter/listado-presenter.component';
import { EffectsModule } from '@ngrx/effects';
import { LanzamientoEffects } from './reducers/lanzamiento.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorContainerComponent,
    BuscadorPresenterComponent,
    ListadoPresenterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    EffectsModule.forRoot([LanzamientoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
