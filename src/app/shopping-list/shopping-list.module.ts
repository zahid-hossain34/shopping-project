import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutes } from './shopping-list.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ShoppingListRoutes
  ],
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent,
  ],
  
})
export class ShoppingListModule { }
