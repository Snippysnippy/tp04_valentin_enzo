import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireSaisieClientComponent } from './formulaire-saisie-client/formulaire-saisie-client.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FilterPipe } from './filter.pipe';
import { TotemComponent } from './totem/totem.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compte', component: FormulaireSaisieClientComponent },
  { path: 'catalogue', component: CatalogueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    CatalogueComponent,
    FilterPipe,
    TotemComponent,
    AccueilComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
