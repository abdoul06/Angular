import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Fadiirad', 'This is simple a test', 
    'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg'),
    new Recipe('Lasagnia', 'This is simple a test', 
    'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
