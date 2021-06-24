import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoteurComponent } from './voiture/moteur/moteur.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AppTestComponent } from './app-test/app-test.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    MoteurComponent,
    AppTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
