import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb } from '@portinari/portinari-ui';

@Component({
  selector: 'app-produto-incluir',
  templateUrl: './produto-incluir.component.html',
  styleUrls: ['./produto-incluir.component.css']
})
export class ProdutoIncluirComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cancelar', url: '/home' },
    { label: 'Salvar', action: null },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'produtos', link: '/produto' },
      { label: 'Inserir produto' }
    ]
  };


  constructor() { }

  ngOnInit() {
  }

}
