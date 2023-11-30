import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({

  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [new Ingredient('aniket', 4), new Ingredient('pawar', 5)];
  constructor() {

  }
  onShopingItemAdded(newData: { name: string, amount: number }) {
    // console.log(newData);
    this.ingredients.push(new Ingredient(newData.name, newData.amount));
  }
}
