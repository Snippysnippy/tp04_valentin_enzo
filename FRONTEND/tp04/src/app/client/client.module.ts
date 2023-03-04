import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '../login/login.component';
import { FormulaireSaisieClientComponent } from '../formulaire-saisie-client/formulaire-saisie-client.component';
import { RecapSaisieClientComponent } from '../recap-saisie-client/recap-saisie-client.component';
import { PhoneNumberPipe } from '../phone-number.pipe';
import { ErrorDirective } from '../error.directive';

@NgModule({
  declarations: [
    LoginComponent,
    FormulaireSaisieClientComponent,
    RecapSaisieClientComponent,
    PhoneNumberPipe,
    ErrorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    FormulaireSaisieClientComponent,
    RecapSaisieClientComponent
  ],
})
export class ClientModule {

}
