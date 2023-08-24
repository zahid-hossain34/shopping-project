import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm!: NgForm;
  subscription!: Subscription;
  editeMode = false;
  editedItemIndex!: number;
  selectedIngredient!: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editeMode = true;
        this.editedItemIndex = index;
        this.selectedIngredient =
          this.shoppingListService.getIngredientsById(index);
        this.slForm.setValue({
          name: this.selectedIngredient.name,
          amount: this.selectedIngredient.amount,
        });
      }
    );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, false);
    if (this.editeMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
      this.editeMode = false;
      form.reset();
    } else {
      this.shoppingListService.onAddIngredient(newIngredient);
      form.reset();
    }
  }
  onClearFields(form: NgForm) {
    this.editeMode = false;
    this.shoppingListService.clearForm(form);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
