import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoNotificationService } from '@portinari/portinari-ui';
import { FormGroup, FormControl } from '@angular/forms';
import { ProdutoIncluir } from './produto-incluir.entity';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
import { IProduto } from './produto-incluir.interface';

@Component({
  selector: 'app-produto-incluir',
  templateUrl: './produto-incluir.component.html',
  styleUrls: ['./produto-incluir.component.css']
})
export class ProdutoIncluirComponent implements OnInit {

  public nome = '';
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
      quantidade: this.quantidade,
      precoCompra: this.precoCompra,
      precoVenda: this.precoVenda

    }

    this.http.post('http://localhost:5000/api/produto', incluirProduto).subscribe(() => {
      this.poNotification.success('Produto incluído com sucesso!');
      this.router.navigateByUrl('/produto');
    }, (erro) => {
      this.poNotification.error(erro);
    });
  }

}
