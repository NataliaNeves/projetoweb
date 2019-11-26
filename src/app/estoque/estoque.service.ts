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
      { property: 'id', label: 'Código', type: 'number'},
      { property: 'nome', label: 'Produto', type: 'string' },
      { property: 'fornecedor', label: 'Fornecedor', type: 'string' },
      { property: 'quantidade', label: 'Quantidade', type: 'number' }
    ];
  }

  getItems(): Observable<Array<ProdutoIncluir>> {

  return this.http.get<Array<ProdutoIncluir>>('http://localhost:5000/api/estoque');
  }

}
