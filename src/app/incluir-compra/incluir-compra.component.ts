import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb } from '@portinari/portinari-ui';

@Component({
  selector: 'app-incluir-compra',
  templateUrl: './incluir-compra.component.html',
  styleUrls: ['./incluir-compra.component.css']
})
export class IncluirCompraComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cancelar', url: '/home' },
    { label: 'Salvar', action: null },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'Inserir compra' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
