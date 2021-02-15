import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosDeportivosComponent } from './articulos-deportivos.component';

describe('ArticulosDeportivosComponent', () => {
  let component: ArticulosDeportivosComponent;
  let fixture: ComponentFixture<ArticulosDeportivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosDeportivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosDeportivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
