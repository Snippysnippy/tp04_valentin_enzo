import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AjouterArticle } from './panier.actions';

export interface PanierStateModel {
  articles: string[];
}

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    articles: []
  }
})
export class PanierState {

  @Action(AjouterArticle)
  ajouterArticle(ctx: StateContext<PanierStateModel>, { payload }: AjouterArticle) {
    const state = ctx.getState();
    ctx.patchState({
      articles: [...state.articles, payload]
    });
  }
}

export class PanierSelectors {
    @Selector([PanierState])
    public static nombreArticles(state: PanierStateModel): number {
      return state.articles.length;
    }
  }