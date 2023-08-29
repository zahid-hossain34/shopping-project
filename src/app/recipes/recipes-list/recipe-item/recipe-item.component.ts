import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService, private route: Router) {}
  subscription!: Subscription;
  recipes: Recipe[] = [];
  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeAdd() {
    this.route.navigate(['/recipes/create']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
