import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorContainerComponent } from './contenedor-container.component';

describe('ContenedorContainerComponent', () => {
  let component: ContenedorContainerComponent;
  let fixture: ComponentFixture<ContenedorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
