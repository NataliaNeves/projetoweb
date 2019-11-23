import { Injectable } from '@angular/core';

import { PoTableColumn } from '@portinari/portinari-ui';

@Injectable()
export class SamplePoTableTransportService {

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'codigo', label: 'Código', type: 'number'},
      { property: 'produto', label: 'Produto', type: 'string' },
      { property: 'fornecedor', label: 'Fornecedor', type: 'string' },
      { property: 'quantidade', label: 'Quantidade', type: 'number' }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        codigo: 1200,
        produto: 'Rice',
        fornecedor: 'Angeloni',
        quantidade: 3
      },
      {
        codigo: 1355,
        produto: 'Margarine',
        fornecedor: 'Giassi',
        quantidade: 1
      },
      {
        codigo: 1496,
        produto: 'Wheat flour',
        fornecedor: 'Walmart',
        quantidade: 5
      },
      {
        codigo: 1712,
        produto: 'Milk',
        fornecedor: 'Carrefour',
        quantidade: 10
      },
      {
        codigo: 1881,
        produto: 'Oil',
        fornecedor: 'Carrefour',
        quantidade: 1
      }
    ];
  }

}