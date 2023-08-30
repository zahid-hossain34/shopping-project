import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'recipes' , loadChildren:()=>import('./recipes/recipes.module').then(m=>m.RecipesModule)},
  {path:'shopping-list' , loadChildren:()=>import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)},
  {path:'auth' , loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
 
  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
