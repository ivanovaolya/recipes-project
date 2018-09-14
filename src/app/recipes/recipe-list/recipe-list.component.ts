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
      'https://f.wishabi.net/flyers/520b2d19-993a-4975-86d0-efb8f600c019/2_1_1.jpg'),
    new Recipe('Pancakes', 'Australias pancakes',
      'https://static.wixstatic.com/media/e5e583_fb9627a243f7493095863e0ff21f4eaf~mv2_d_2448_2448_s_4_2.jpg_256')
  ];

  constructor() { }

  ngOnInit() {
  }

}
