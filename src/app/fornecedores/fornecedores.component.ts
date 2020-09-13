import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb } from '@portinari/portinari-ui';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.salvar.bind(this) },
    { label: 'Cancelar', url: '/home' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'Inserir fornecedor' }
    ]
  };

  public nome = '';

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
  }

  salvar() {

    const fornecedor = {
      nome: this.nome
    };
    this.http.post('http://localhost:5000/api/fornecedor', fornecedor).subscribe(() => { });
  }

}
