import { Component, OnDestroy, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wish-item.model';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishService } from '../shared/models/services/wish.service';
import { Subscription } from 'rxjs';
import { Filter } from '../shared/enums/filter.enum';

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

  constructor(private wishService: WishService) {}

  ngOnInit() {
    if (this.wishService.currentWishes.length === 0) {
      this.addWish('To Learn Angular');
      this.addWish('Get Coffee', true);
      this.addWish('Find grass that cuts itself');
    }

    this.sub = this.wishService.wishes$.subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  addWish(text: string, isComplete = false) {
    this.wishService.addWish(text, isComplete);
  }

  removeWish(wish: WishItem) {
    this.wishService.removeWish(wish);
  }

  get visibleItems(): WishItem[] {
    return this.wishService.getFilteredWishes(this.filter);
  }

  handleToggleItem(item: WishItem) {
    this.wishService.toggleWish(item);
  }

  handleFilterChange(filterValue: Filter) {
    this.filter = filterValue;
  }
}
