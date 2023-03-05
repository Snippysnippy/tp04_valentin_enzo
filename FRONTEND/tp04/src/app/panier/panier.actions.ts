import { Action } from '@ngxs/store';

export class AjouterArticle {
  static readonly type = '[Panier] Ajouter article';
  constructor(public payload: string) {}
}
