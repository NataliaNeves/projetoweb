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

  get getNome() {
    return this.form.get('nome').value;
  }
  get getQuantidade() {
    return this.form.get('quantidade').value;
  }
  get getFornecedor() {
    return this.form.get('fornecedor').value;
  }
  get getVenda() {
    return this.form.get('precoVenda').value;
  }
  get getCompra() {
    return this.form.get('precoCompra').value;
  }

  form: FormGroup = new FormGroup({
    nome: new FormControl(),
    quantidade: new FormControl(),
    precoCompra: new FormControl(),
    precoVenda: new FormControl()
  });

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

    const incluirProduto: IProduto = {

      ProviderId: null,
      Name: this.getNome(),
      Quantity: this.getQuantidade(),
      PurchasePrice: this.getCompra(),
      SellPrice: this.getVenda()
      
    }

    this.http.post('https://localhost:44369/api/Product,', incluirProduto).subscribe(() => {
      this.poNotification.success('Produto incluído com sucesso!');
      this.router.navigateByUrl('/produto');
    }, (erro) => {
      this.poNotification.error(erro);
    });
  }

}
