import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnChanges {
  @Input() recipeDetails!: Recipe;
  ngOnChanges(changes: SimpleChanges): void {
    this.recipeDetails = changes['recipeDetails'].currentValue;
  }
  constructor(private recipeService: RecipeService) {}
  onAddShoppingList() {
    console.log('onAddShoppingList');

    this.recipeService.addIngredientsToShoppingList(
      this.recipeDetails.ingredients
    );
  }
}
