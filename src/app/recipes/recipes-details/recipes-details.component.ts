import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss'],
})
export class RecipesDetailsComponent implements OnInit {
  recipeDetails!: Recipe;
  id!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      console.log('this.id', this.id);

      this.recipeDetails = this.recipeService.getRecipeById(this.id) as Recipe;
      console.log('this.recipeDetails', this.recipeDetails);
    });
  }
  onAddShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeDetails.ingredients
    );
  }
}
