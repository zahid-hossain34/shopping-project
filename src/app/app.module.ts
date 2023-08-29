import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/Home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SpinLoaderComponent } from './spin-loader/spin-loader.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipeItemComponent,
    HomeComponent,
    NotFoundComponent,
    CreateRecipeComponent,
    UpdateRecipeComponent,
    AuthComponent,
    SignUpComponent,
      SpinLoaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
