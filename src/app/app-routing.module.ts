import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipePlaceholderComponent } from './recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipePlaceholderComponent },
      { path: ':id', component: RecipesDetailsComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
