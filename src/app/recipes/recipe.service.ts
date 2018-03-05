import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://static-cdn.jtvnw.net/jtv_user_pictures/c4651b98ce8a349d-profile_image-300x300.png'
    , [new Ingredient('meat', 2),
      new Ingredient('ff', 40)]),
    new Recipe('2 test', 'This is simply a test',
      'https://static-cdn.jtvnw.net/jtv_user_pictures/c4651b98ce8a349d-profile_image-300x300.png',
      [new Ingredient('frog', 2)])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }
}
