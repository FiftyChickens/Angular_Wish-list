import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishFormComponent } from './add-wish-form.component';
import { FormsModule } from '@angular/forms';

describe('AddWishFormComponent', () => {
  let component: AddWishFormComponent;
  let fixture: ComponentFixture<AddWishFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWishFormComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
