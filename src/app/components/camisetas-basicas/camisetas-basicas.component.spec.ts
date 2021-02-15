import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasBasicasComponent } from './camisetas-basicas.component';

describe('CamisetasBasicasComponent', () => {
  let component: CamisetasBasicasComponent;
  let fixture: ComponentFixture<CamisetasBasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetasBasicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetasBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
