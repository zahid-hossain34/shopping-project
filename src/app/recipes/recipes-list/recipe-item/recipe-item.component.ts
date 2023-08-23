import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeService: RecipeService, private route: Router) {}
  recipes: Recipe[] = [];
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeAdd() {
    this.route.navigate(['/recipes/create']);
  }
}
