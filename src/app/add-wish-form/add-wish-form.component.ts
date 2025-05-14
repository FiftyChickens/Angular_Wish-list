import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<string>();

  newWishText: string = '';

  addNewWish() {
    if (this.newWishText.trim()) {
      this.addWish.emit(this.newWishText);
      this.newWishText = '';
    }
  }
}
