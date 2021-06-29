import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipe: {name: string, description: string, imagePath: string};
  @Input() recipe: Recipe;
  constructor() { 
    console.log(this.recipe)
  }

  ngOnInit(): void {
  }

}
