import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FilterPipe } from './filter.pipe';
import { TotemComponent } from './totem/totem.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./app-routing.module').then(m => m.AppRoutingModule) },
  { path: 'client', loadChildren: () => import('./client-routing.module').then(m => m.ClientRoutingModule) },
  // { path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.component').then(m => m.CatalogueComponent) },
  // { path: 'detail/:id', loadChildren: () => import('./detail-article/detail-article.module').then(m => m.DetailArticleModule) },
  // { path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) },
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
