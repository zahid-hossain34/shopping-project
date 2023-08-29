import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './guards/auth.guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RecipePlaceholderComponent } from './recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';
import { RecipeResolverService } from './resolvers/RecipeResolverService';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: RecipePlaceholderComponent },
      { path: 'create', component: CreateRecipeComponent },
      {
        path: ':id',
        component: RecipesDetailsComponent,
        resolve: { recipe: RecipeResolverService },
      },
      {
        path: ':id/update',
        component: UpdateRecipeComponent,
        resolve: { recipe: RecipeResolverService },
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'auth',
    component: AuthComponent,
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
