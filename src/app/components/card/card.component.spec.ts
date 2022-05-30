import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = {
      "id": 9509,
      "uid": "9c99b1ca-c070-43b0-8ba4-19733c862dd4",
      "blend_name": "Bluebery Extract",
      "origin": "Nueva Segovia, Nicaragua",
      "variety": "Dega",
      "notes": "complex, chewy, white grape, sundried tomato, black pepper",
      "intensifier": "dull"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
