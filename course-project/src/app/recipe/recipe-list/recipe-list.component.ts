import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test #1', 'This is simple a test', 
    'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg'),
    new Recipe('Test #2', 'This is simple a test', 
    'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
