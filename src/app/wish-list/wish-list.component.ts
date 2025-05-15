import { Component, Input, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wish-item.model';
import { CommonModule } from '@angular/common';
import { WishService } from '../../shared/models/services/wish.service';

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

  constructor(private WishService: WishService) {}

  getItemClasses(item: WishItem) {
    return { 'strikeout text-muted': item.isComplete };
  }

  removeWish(wish: WishItem) {
    this.WishService.removeWish(wish);
  }

  toggleItem(item: WishItem) {
    this.toggle.emit(item);
  }
  trackByWish(index: number, item: WishItem): string {
    return item.wishText;
  }
}
