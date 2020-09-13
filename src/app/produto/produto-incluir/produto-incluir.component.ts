import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService, PoPageAction } from '@portinari/portinari-ui';
import { ProdutoIncluir } from './produto-incluir.entity';

@Component({
  selector: 'app-produto-incluir',
  templateUrl: './produto-incluir.component.html',
  styleUrls: ['./produto-incluir.component.css']
})
export class ProdutoIncluirComponent implements OnInit {

  public nome = '';
  public fornecedor = '';
  public quantidade = null;
  public precoCompra = null;
  public precoVenda = null;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.save.bind(this) },
    { label: 'Cancelar', url: '/home' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'produtos', link: '/produto' },
      { label: 'Inserir produto' }
    ]
  };


  constructor(
    private http: HttpClient,
    public router: Router,
    public poNotification: PoNotificationService
  ) { }

  ngOnInit() {
  }

  save() {

    const incluirProduto: ProdutoIncluir = {
      nome: this.nome,
      fornecedor: this.fornecedor,
      quantidade: this.quantidade,
      precoCompra: this.precoCompra,
      precoVenda: this.precoVenda
    };

    this.http.post('http://localhost:5000/api/produto', incluirProduto).subscribe(() => {
      this.poNotification.success('Produto incluído com sucesso!');
      this.router.navigateByUrl('/produto');
    }, (erro) => {
      this.poNotification.error(erro);
    });
  }

}
