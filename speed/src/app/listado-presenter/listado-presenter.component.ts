import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-listado-presenter',
  templateUrl: './listado-presenter.component.html',
  styleUrls: ['./listado-presenter.component.css']
})
export class ListadoPresenterComponent implements OnInit {
  @Input() public lanzamientos: any[];
  @Input() public contador = { cantidad: 99 };
  @Output() public graba = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
