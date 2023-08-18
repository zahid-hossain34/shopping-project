import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnChanges {
  @Input() recipeDetails!: Recipe;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.recipeDetails);
    this.recipeDetails = changes['recipeDetails'].currentValue;
  }
}
