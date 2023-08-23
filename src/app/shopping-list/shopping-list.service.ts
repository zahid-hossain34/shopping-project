import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredient: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {
    console.log('ShoppingListService constructor', this.ingredient);
  }
  onAddIngredient(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientChanged.next(this.ingredient.slice());
  }
  getIngredient() {
    return this.ingredient.slice();
  }
  removeIngredient(item: Ingredient) {
    const index = this.ingredient.indexOf(item);
    this.ingredient.splice(index, 1);
    this.ingredientChanged.next(this.ingredient.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    console.log('addIngredients', ingredients);
    // check those ingredients are already in the list
    // if yes, then push the amount to the existing ingredient
    // if no, then push the ingredient to the list
    ingredients.forEach((ingredient) => {
      const index = this.ingredient.findIndex(
        (item) => item.name.toLowerCase() === ingredient.name.toLowerCase()
      );
      if (index !== -1) {
        this.ingredient[index].amount += ingredient.amount;
      } else {
        this.ingredient.push(ingredient);
      }
    });
    this.ingredientChanged.next(this.ingredient.slice());
  }
}
