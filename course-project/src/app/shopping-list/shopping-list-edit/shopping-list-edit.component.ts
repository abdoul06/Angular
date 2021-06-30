import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class shoppingListEditComponent {
    // @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
    // @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

    @Output() ingredientCreated = new EventEmitter<Ingredient>();

    onAddIngredient(nameInput, amountInput) {
        // const ingName = this.nameInput.nativeElement.value;
        // const ingAmount = this.amountInput.nativeElement.value;
        // const newIngredient = new Ingredient(ingName,ingAmount)
        
        this.ingredientCreated.emit({
            name: nameInput.value,
            amount: amountInput.value
        });
    }
}