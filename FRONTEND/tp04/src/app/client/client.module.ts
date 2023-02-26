import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '../login/login.component';
import { FormulaireSaisieClientComponent } from '../formulaire-saisie-client/formulaire-saisie-client.component';

@NgModule({
  declarations: [LoginComponent, FormulaireSaisieClientComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginComponent, FormulaireSaisieClientComponent],
})
export class ClientModule {}
