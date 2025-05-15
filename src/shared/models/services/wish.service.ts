import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WishItem } from '../wishItem';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private _wishes = new BehaviorSubject<WishItem[]>([]);
  public wishes$ = this._wishes.asObservable();

  get currentWishes() {
    return this._wishes.value;
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
}
