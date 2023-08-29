import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { RouterModule } from '@angular/router';
import { RecipePlaceholderComponent } from './recipe-placeholder/recipe-placeholder.component';
import { RecipeRoutes } from './recipe.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RecipeRoutes

  ],
  declarations: [
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    RecipeItemComponent,
    CreateRecipeComponent,
    UpdateRecipeComponent,
    RecipePlaceholderComponent
  ]
})
export class RecipesModule { }
