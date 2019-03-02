import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPresenterComponent } from './listado-presenter.component';

describe('ListadoPresenterComponent', () => {
  let component: ListadoPresenterComponent;
  let fixture: ComponentFixture<ListadoPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
