import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoTableColumn, PoSelectOption } from '@portinari/portinari-ui';
import { EstoqueService } from './estoque.service';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
  providers: [ EstoqueService ]
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
    private transportService: EstoqueService
  ) { }

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.transportService.getItems().subscribe((produtos) => {
      this.items = produtos;
    });
  }

  isUndelivered(row: {status: string}, index: number) {
    return row.status !== 'delivered';
  }

}
