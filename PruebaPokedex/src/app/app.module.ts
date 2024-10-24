import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { ListaItemComponent } from './components/lista-item/lista-item.component';
import { ListaMovimientosComponent } from './components/lista-movimientos/lista-movimientos.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { provideHttpClient } from '@angular/common/http';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonComponent,
    ListaItemComponent,
    ListaMovimientosComponent,
    MenuComponent,
    PageNotFoundComponent,
    PokemonComponent,
    PokemonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
