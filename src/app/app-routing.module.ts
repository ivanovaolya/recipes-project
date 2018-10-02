import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },  // redirect only if the full path is empty
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // register defined routes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
