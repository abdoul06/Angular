import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { shoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

import { RecipeComponent } from './recipe/recipe.component';

import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-detail/recipe-details.component';

import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    shoppingListEditComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
