import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },

];

export const ShoppingListRoutes = RouterModule.forChild(routes);
