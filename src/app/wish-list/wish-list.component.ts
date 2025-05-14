import { Component, Input, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  @Output() toggle = new EventEmitter<WishItem>();

  getItemClasses(item: WishItem) {
    // return item.isComplete ? ['strikeout', 'text-muted'] : [];

    return { 'strikeout text-muted': item.isComplete };
  }

  toggleItem(item: WishItem) {
    this.toggle.emit(item);
  }
}
