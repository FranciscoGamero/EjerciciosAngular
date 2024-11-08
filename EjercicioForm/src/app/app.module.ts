import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioRegistroComponent } from './components/formulario-registro-component/formulario-registro-component.component';
import { FormsModule } from '@angular/forms';
import { LetraDNIPipe } from './pipes/letra-dni.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    LetraDNIPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
