import { ChangeDetectionStrategy, Component, Input, OnInit  } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-listado-presenter',
  templateUrl: './listado-presenter.component.html',
  styleUrls: ['./listado-presenter.component.css']
})
export class ListadoPresenterComponent implements OnInit {
  @Input() public lanzamientos: any[];
  @Input() public contador = { contenido: 99 };
  constructor() { }

  ngOnInit() {
  }

}
