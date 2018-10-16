import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Seafood stew', 'Just a seafood stew',
      'https://f.wishabi.net/flyers/520b2d19-993a-4975-86d0-efb8f600c019/2_1_1.jpg',
      [new Ingredient('Fish', 1), new Ingredient('Rice', 23)]),
    new Recipe('Pancakes', 'Australias pancakes',
      'https://static.wixstatic.com/media/e5e583_fb9627a243f7493095863e0ff21f4eaf~mv2_d_2448_2448_s_4_2.jpg_256',
      [new Ingredient('Flour', 50), new Ingredient('Water', 100), new Ingredient('Sugar', 24)])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // returns exact copy of the array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

}
