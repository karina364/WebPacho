import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosPersonalizadosComponent } from './articulos-personalizados.component';

describe('ArticulosPersonalizadosComponent', () => {
  let component: ArticulosPersonalizadosComponent;
  let fixture: ComponentFixture<ArticulosPersonalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosPersonalizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
