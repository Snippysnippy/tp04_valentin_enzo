import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'panier', component: PanierComponent },
    // { path: 'detail/:id', loadChildren: () => import('./detail-article/detail-article.module').then(m => m.DetailArticleModule) },
  // { path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
