import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
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
  isDeleteable = false;
  ngOnInit(): void {
    this.ingredient = this.shoppingListService.getIngredient();
    this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe(
      (ingredient) => {
        this.ingredient = ingredient;
      }
    );
  }

  delteItem(item: Ingredient) {
    this.shoppingListService.removeIngredient(item);
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  onEditItem(index: number) {
    this.ingredient.forEach((item) => {
      item.isDeleteable = false;
    });
    this.ingredient[index].isDeleteable = true;
    this.shoppingListService.startEditing.next(index);
  }
}
