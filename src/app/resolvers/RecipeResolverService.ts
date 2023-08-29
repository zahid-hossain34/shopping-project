import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecipeService } from '../recipes/recipe.service';
import { RecipeDataStoreService } from '../store/recipe-data-store.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService {
  constructor(
    private recipeDataStoreServiec: RecipeDataStoreService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipe = this.recipeService.getRecipes();
    if (recipe.length === 0) {
      return this.recipeDataStoreServiec.fetchRecipes();
    } else {
      return recipe;
    }
  }
}
