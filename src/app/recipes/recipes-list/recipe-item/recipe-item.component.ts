import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService) {}
  recipes: Recipe[] = [];
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onSelect(recipe: Recipe, i: number) {
    if (!recipe.isSelected) {
      this.recipes.forEach((recipe) => {
        recipe.isSelected = false;
      });
    }
    this.recipes[i].isSelected = !recipe.isSelected;
    this.recipeService.recipeSelected.emit(recipe);
  }
  ngOnDestroy(): void {
    this.recipes.forEach((recipe) => {
      recipe.isSelected = false;
    });
  }
}
