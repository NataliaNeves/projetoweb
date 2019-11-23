import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoTableColumn } from '@portinari/portinari-ui';
import { SamplePoTableTransportAlterarService } from './sample-po-table-transport-alterar.service';


@Component({
  selector: 'app-produto-alterar',
  templateUrl: './produto-alterar.component.html',
  styleUrls: ['./produto-alterar.component.css'],
  providers: [ SamplePoTableTransportAlterarService ]
})
export class ProdutoAlterarComponent implements OnInit {

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
    private transportService: SamplePoTableTransportAlterarService
  ) { }

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }

}
