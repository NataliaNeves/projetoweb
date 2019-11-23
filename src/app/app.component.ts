import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: 'home' },
    { label: 'Nova compra', link: 'incluircompra' },
    { label: 'Fornecedores', link: 'fornecedores' },
    { label: 'Estoque', link: 'estoque' },
    { label: 'Produtos', link: 'produto' },
  ];

}
