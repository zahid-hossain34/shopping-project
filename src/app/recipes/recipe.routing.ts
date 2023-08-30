import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../guards/auth.guard.service';
import { RecipeResolverService } from '../resolvers/RecipeResolverService';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipePlaceholderComponent } from './recipe-placeholder/recipe-placeholder.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesComponent } from './recipes.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';

const routes: Routes = [
  {
    path: '',
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
  }
];

export const RecipeRoutes = RouterModule.forChild(routes);
