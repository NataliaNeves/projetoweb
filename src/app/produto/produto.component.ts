import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cancelar', url: '/home' },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'Opções Produto' }
    ]
  };

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  navegar() {

    this.router.navigateByUrl('/produto/incluir')

  }

  navegarAlterar() {

    this.router.navigateByUrl('/produto/alterar')

  }

}
