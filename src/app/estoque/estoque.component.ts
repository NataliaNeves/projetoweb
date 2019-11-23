import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoTableColumn, PoSelectOption } from '@portinari/portinari-ui';
import { SamplePoTableTransportService } from './sample-po-table-transport.service';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
  providers: [ SamplePoTableTransportService ]
})
export class EstoqueComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cancelar', url: '/home' },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'Opções Estoque' }
    ]
  };

  columns: Array<PoTableColumn>;
  items: Array<any>;

  constructor(
    private transportService: SamplePoTableTransportService
  ) { }

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }

}
