import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() onAddedClicked = new EventEmitter<{ name: string, amount: number }>();

  constructor(private slService: ShoppingListService) { }

  onAddItem() {
    this.slService.addIngredient({ name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value });
  }
}
