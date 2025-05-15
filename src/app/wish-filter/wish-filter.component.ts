import { Component, Output, Input, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wish-item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Filter } from '../../shared/enums/filter.enum';

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
