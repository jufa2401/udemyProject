import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://static-cdn.jtvnw.net/jtv_user_pictures/c4651b98ce8a349d-profile_image-300x300.png'),
    new Recipe('2 test', 'This is simply a test',
      'https://static-cdn.jtvnw.net/jtv_user_pictures/c4651b98ce8a349d-profile_image-300x300.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe); // Now we can follow when a recipe is selected in the console
    this.recipeWasSelected.emit(recipe);
  }
}
