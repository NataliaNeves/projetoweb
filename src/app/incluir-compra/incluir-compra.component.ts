import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoNotificationService } from '@portinari/portinari-ui';
import { IProduto } from '../produto/produto-incluir/produto-incluir.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-incluir-compra',
  templateUrl: './incluir-compra.component.html',
  styleUrls: ['./incluir-compra.component.css']
})
export class IncluirCompraComponent implements OnInit {

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cancelar', url: '/home' },
    { label: 'Salvar', action: this.salvar.bind(this) },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'Inserir compra' }
    ]
  };

  public produtos = [{
    idProduto: '',
    quantidade: 0
  }];

  constructor(
    private http: HttpClient,
    public poNotification: PoNotificationService
  ) { }

  ngOnInit() {
  }

  salvar() {
    const compra = {
      data: new Date().toISOString(),
      itens: this.produtos
    };

    console.log(JSON.stringify(compra));

    this.http.post('http://localhost:5000/api/compra', compra).subscribe(() => {
      this.poNotification.success('Compra incluída com sucesso!');
    }, (erro) => {
      this.poNotification.error(erro);
    });
  }

  adicionar() {
    this.produtos.push({
      idProduto: '',
      quantidade: 0
    });
  }

  remover(index) {
    this.produtos.splice(index, 1);
  }

}
