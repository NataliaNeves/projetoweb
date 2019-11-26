import { Injectable } from '@angular/core';

import { PoTableColumn } from '@portinari/portinari-ui';
import { Observable, of } from 'rxjs';
import { ProdutoIncluir } from '../produto/produto-incluir/produto-incluir.entity';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstoqueService {

  constructor(
    private http: HttpClient
  ) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'codigo', label: 'Código', type: 'number'},
      { property: 'produto', label: 'Produto', type: 'string' },
      { property: 'fornecedor', label: 'Fornecedor', type: 'string' },
      { property: 'quantidade', label: 'Quantidade', type: 'number' }
    ];
  }

  getItems(): Observable<Array<ProdutoIncluir>> {

  //return this.http.get<Array<ProdutoIncluir>>('https://localhost:44369/api/{entidade}/');
    return of([
      {
        codigo: 1200,
        produto: 'Rice',
        fornecedor: 'Angeloni',
        quantidade: 3,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1355,
        produto: 'Margarine',
        fornecedor: 'Giassi',
        quantidade: 1,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1496,
        produto: 'Wheat flour',
        fornecedor: 'Walmart',
        quantidade: 5,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1712,
        produto: 'Milk',
        fornecedor: 'Carrefour',
        quantidade: 10,
        precoCompra: 2.99,
        precoVenda: 8.99
      },
      {
        codigo: 1881,
        produto: 'Oil',
        fornecedor: 'Carrefour',
        quantidade: 1,
        precoCompra: 2.99,
        precoVenda: 8.99
      }
    ]);
  }

}