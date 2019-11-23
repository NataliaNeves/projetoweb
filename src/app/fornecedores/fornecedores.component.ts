import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb } from '@portinari/portinari-ui';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cancelar', url: '/home' },
    { label: 'Salvar', action: null },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'Inserir fornecedor' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
