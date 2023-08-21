import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredient = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientChanged.subscribe((ingredient) => {
      this.ingredient = ingredient;
    });
  }

  delteItem(item: Ingredient) {
    console.log('delteItem', item.name);

    this.shoppingListService.removeIngredient(item);
  }
}
