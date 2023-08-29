import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeDataStoreService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(`${environment.API_URL}/recipes.json`, recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchRecipes() {
    return this.http.get<Recipe[]>(`${environment.API_URL}/recipes.json`).pipe(
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
