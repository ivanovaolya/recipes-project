import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },  // redirect only if the full path is empty
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // dynamically load RecipesModule
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) // register defined routes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
