import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredient: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {
    console.log('ShoppingListService constructor', this.ingredient);
  }
  onAddIngredient(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientChanged.emit(this.ingredient.slice());
  }
  getIngredient() {
    return this.ingredient.slice();
  }
  removeIngredient(item: Ingredient) {
    const index = this.ingredient.indexOf(item);
    this.ingredient.splice(index, 1);
    this.ingredientChanged.emit(this.ingredient.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredient.push(...ingredients);
    this.ingredientChanged.emit(this.ingredient.slice());
  }
}
