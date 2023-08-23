import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredient: Ingredient[] = [];
  private igChangeSub!: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredient = this.shoppingListService.getIngredient();
    this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe(
      (ingredient) => {
        this.ingredient = ingredient;
      }
    );
  }

  delteItem(item: Ingredient) {
    console.log('delteItem', item.name);

    this.shoppingListService.removeIngredient(item);
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
