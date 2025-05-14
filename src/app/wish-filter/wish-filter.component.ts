import { Component, Output, Input, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export enum Filter {
  All = 0,
  Unfulfilled = 1,
  Fulfilled = 2,
}

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  @Input() currentFilter!: Filter;
  @Output() filterChange = new EventEmitter<number>();

  updateFilter(value: Filter) {
    this.currentFilter = value;
    this.filterChange.emit(value);
  }
}
