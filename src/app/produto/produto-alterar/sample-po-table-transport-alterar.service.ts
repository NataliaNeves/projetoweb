import { Injectable } from '@angular/core';

import { PoTableColumn } from '@portinari/portinari-ui';

@Injectable()
export class SamplePoTableTransportAlterarService {

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'codigo', label: 'Código', type: 'number'},
      { property: 'produto', label: 'Produto', type: 'string' },
      { property: 'quantidade', label: 'Quantidade', type: 'number' }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        codigo: 1200,
        produto: 'Rice',
        quantidade: 3
      },
      {
        codigo: 1355,
        produto: 'Margarine',
        quantidade: 1
      },
      {
        codigo: 1496,
        produto: 'Wheat flour',
        quantidade: 5
      },
      {
        codigo: 1712,
        produto: 'Milk',
        quantidade: 10
      },
      {
        codigo: 1881,
        produto: 'Oil',
        quantidade: 1
      }
    ];
  }

}