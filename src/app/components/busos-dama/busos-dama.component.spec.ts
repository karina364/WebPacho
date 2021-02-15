import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusosDamaComponent } from './busos-dama.component';

describe('BusosDamaComponent', () => {
  let component: BusosDamaComponent;
  let fixture: ComponentFixture<BusosDamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusosDamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusosDamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
