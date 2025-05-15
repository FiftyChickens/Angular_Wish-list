import { Component, OnDestroy, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import {
  Filter,
  WishFilterComponent,
} from './wish-filter/wish-filter.component';
import { WishService } from '../shared/models/services/wish.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  filter: Filter = Filter.All;
  private sub = new Subscription();

  constructor(private WishService: WishService) {}

  ngOnInit() {
    if (this.WishService.currentWishes.length === 0) {
      this.addWish('To Learn Angular');
      this.addWish('Get Coffee', true);
      this.addWish('Find grass that cuts itself');
    }

    this.sub = this.WishService.wishes$.subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  addWish(text: string, isComplete = false) {
    this.WishService.addWish(text, isComplete);
  }

  removeWish(wish: WishItem) {
    this.WishService.removeWish(wish);
  }

  get visibleItems(): WishItem[] {
    return this.WishService.currentWishes.filter(this.getCurrentFilter());
  }

  private getCurrentFilter() {
    return [
      (item: WishItem) => item,
      (item: WishItem) => !item.isComplete,
      (item: WishItem) => item.isComplete,
    ][this.filter];
  }

  handleToggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    this.WishService.removeWish(item);
    this.WishService.addWish(item.wishText, item.isComplete);
  }

  handleFilterChange(filterValue: Filter) {
    this.filter = filterValue;
  }
}
