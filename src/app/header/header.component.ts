import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeDataStoreService } from '../store/recipe-data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private recipeDataStoreService: RecipeDataStoreService) {}

  ngOnInit() {}
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onSaveData() {
    this.recipeDataStoreService.storeRecipes();
  }
  onFetchData() {
    this.recipeDataStoreService.fetchRecipes().subscribe();
  }
}
