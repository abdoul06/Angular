import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test #1', 'This is simple a test', 
    'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg'),
    new Recipe('Test #2', 'This is simple a test', 
    'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg'),
  ];
  constructor() { }

  getRecipe() {
    return this.recipes; 
  }
}
