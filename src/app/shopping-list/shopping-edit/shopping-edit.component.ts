import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() onAddedClicked = new EventEmitter<{ name: string, amount: number }>();
  onAddItem() {
    // console.log("hello");
    this.onAddedClicked.emit({ name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value });
  }
}
