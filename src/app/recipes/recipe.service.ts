import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements OnInit {
  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}
  // recipes: Recipe[] = [
  //   new Recipe(
  //     1,
  //     'Chiken Stake',
  //     'This is a chiken stake recipe',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  //     [
  //       { name: 'Chiken', amount: 1, isDeleteable: false },
  //       { name: 'French Fries', amount: 20, isDeleteable: false },
  //     ]
  //   ),
  //   new Recipe(
  //     2,
  //     'BBQ Stake',
  //     'This is a BBQ stake recipe',
  //     'https://cdn.commercev3.net/cdn.jackstackbbq.com/images/popup/CYO-TKC.jpg',
  //     [
  //       { name: 'Beef', amount: 1, isDeleteable: false },
  //       { name: 'French Fries', amount: 20, isDeleteable: false },
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];
  ngOnInit(): void {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeById(id: string) {
    return this.recipes.find((recipe: Recipe) => recipe.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[] | any) {
    this.shoppingListService.addIngredients(ingredients);
  }
  addrecipie(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(id: string, newRecipe: Recipe) {
    const index = this.recipes.findIndex((recipe) => recipe.id === id);
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(id: string) {
    const index = this.recipes.findIndex((recipe) => recipe.id === id);
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  setRecipes(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
