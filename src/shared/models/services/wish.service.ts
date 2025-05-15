import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WishItem } from '../wish-item.model';
import { Filter } from '../../enums/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private _wishes = new BehaviorSubject<WishItem[]>([]);
  public wishes$ = this._wishes.asObservable();

  get currentWishes() {
    return this._wishes.value;
  }

  getFilteredWishes(filter: Filter): WishItem[] {
    switch (filter) {
      case Filter.Fulfilled:
        return this._wishes.value.filter((item) => item.isComplete);
      case Filter.Unfulfilled:
        return this._wishes.value.filter((item) => !item.isComplete);
      default:
        return this._wishes.value;
    }
  }

  addWish(text: string, isComplete = false) {
    this._wishes.next([...this._wishes.value, new WishItem(text, isComplete)]);
  }

  removeWish(wishToRemove: WishItem) {
    this._wishes.next(this._wishes.value.filter((w) => w !== wishToRemove));
  }

  updateWishes(updateWishes: WishItem[]) {
    this._wishes.next(updateWishes);
  }

  toggleWish(item: WishItem) {
    const updated = this._wishes.value.map((wish) =>
      wish === item ? new WishItem(wish.wishText, !wish.isComplete) : wish
    );
    this._wishes.next(updated);
  }
}
