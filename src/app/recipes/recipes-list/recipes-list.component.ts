import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Chiken Stake',
      'This is a chiken stake recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
    new Recipe(
      'BBQ Stake',
      'This is a BBQ stake recipe',
      'https://cdn.commercev3.net/cdn.jackstackbbq.com/images/popup/CYO-TKC.jpg'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
  onSelectRecipe(recipeData: Recipe) {
    this.recipeWasSelected.emit(recipeData);
  }
}
