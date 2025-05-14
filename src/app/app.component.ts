import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import {
  Filter,
  WishFilterComponent,
} from './wish-filter/wish-filter.component';

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
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  get visibleItems(): WishItem[] {
    return this.items.filter(this.getCurrentFilter());
  }

  private getCurrentFilter() {
    return [
      (item: WishItem) => item,
      (item: WishItem) => !item.isComplete,
      (item: WishItem) => item.isComplete,
    ][this.filter];
  }

  filter: Filter = Filter.All;

  handleAddWish(wishText: string) {
    this.items.push(new WishItem(wishText));
  }

  handleToggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  handleFilterChange(filterValue: number) {
    this.filter = filterValue;
  }
}

// https://youtu.be/JWhRMyyF7nc?t=4401
