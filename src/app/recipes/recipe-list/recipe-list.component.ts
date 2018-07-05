import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Seafood stew', 'Just a seafood stew',
      'http://scibosnian.com/wp-content/uploads/2017/12/Seafood_Stew.jpg'),
    new Recipe('Pancakes', 'Australias pancakes',
      'https://img.taste.com.au/GR-XKpyy/taste/2014/10/australias-most-cooked-pancake-recipe-118377-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
