import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [ 
    new Recipe('Test #1', 'This is simple a test', 
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-quiche-lorraine_H_s4x3.jpg.rend.hgtvcom.406.271.suffix/1567523605408.jpeg'),
  
    new Recipe('Test #2', 'This is simple a test', 
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-quiche-lorraine_H_s4x3.jpg.rend.hgtvcom.406.271.suffix/1567523605408.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe); 
  }

}
