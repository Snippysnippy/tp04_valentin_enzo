import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { PanierState } from '../panier/panier.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.scss']
})
export class TetiereComponent {
  @Select(PanierState.nombreArticles) nombreArticles$!: Observable<number>;
}
