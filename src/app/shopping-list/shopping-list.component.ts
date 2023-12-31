import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({

  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  constructor(private slService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  // onShopingItemAdded(newData: { name: string, amount: number }) {
  //   // console.log(newData);
  //   this.ingredients.push(new Ingredient(newData.name, newData.amount));
  // }
}
