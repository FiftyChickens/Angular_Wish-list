import { Component, Input, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  @Output() toggle = new EventEmitter<WishItem>();

  toggleItem(item: WishItem) {
    this.toggle.emit(item);
  }
}
