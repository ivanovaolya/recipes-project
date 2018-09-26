import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Seafood stew', 'Just a seafood stew',
      'https://f.wishabi.net/flyers/520b2d19-993a-4975-86d0-efb8f600c019/2_1_1.jpg'),
    new Recipe('Pancakes', 'Australias pancakes',
      'https://static.wixstatic.com/media/e5e583_fb9627a243f7493095863e0ff21f4eaf~mv2_d_2448_2448_s_4_2.jpg_256')
  ];

  getRecipes() {
    return this.recipes.slice(); // returns exact copy of the array
  }
}
