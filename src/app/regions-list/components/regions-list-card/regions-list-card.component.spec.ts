import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsListCardComponent } from './regions-list-card.component';

describe('RegionsListCardComponent', () => {
  let component: RegionsListCardComponent;
  let fixture: ComponentFixture<RegionsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
