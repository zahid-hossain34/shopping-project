import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeDataStoreService } from '../store/recipe-data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;
  isAuthenticated = false;
  constructor(
    private recipeDataStoreService: RecipeDataStoreService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.recipeDataStoreService.storeRecipes();
  }
  onFetchData() {
    this.recipeDataStoreService.fetchRecipes().subscribe();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.authService.logOut();
  }
}
