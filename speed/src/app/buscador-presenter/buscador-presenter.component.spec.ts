import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPresenterComponent } from './buscador-presenter.component';

describe('BuscadorPresenterComponent', () => {
  let component: BuscadorPresenterComponent;
  let fixture: ComponentFixture<BuscadorPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
