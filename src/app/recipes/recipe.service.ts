import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}
  recipes: Recipe[] = [
    new Recipe(
      1,
      'Chiken Stake',
      'This is a chiken stake recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        { name: 'Chiken', amount: 1 },
        { name: 'French Fries', amount: 20 },
      ]
    ),
    new Recipe(
      2,
      'BBQ Stake',
      'This is a BBQ stake recipe',
      'https://cdn.commercev3.net/cdn.jackstackbbq.com/images/popup/CYO-TKC.jpg',
      [
        { name: 'Beef', amount: 1 },
        { name: 'French Fries', amount: 20 },
      ]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[] | any) {
    console.log('addIngredientsToShoppingList', ingredients);

    this.shoppingListService.addIngredients(ingredients);
  }
}
