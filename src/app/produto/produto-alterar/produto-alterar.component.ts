import { Component, OnInit, ViewChild } from '@angular/core';
import { PoPageAction, PoBreadcrumb, PoTableColumn, PoTableAction, PoModalComponent, PoModalAction, PoNotificationService } from '@portinari/portinari-ui';
import { Router } from '@angular/router';
import { ProdutoIncluir } from '../produto-incluir/produto-incluir.entity';
import { IProduto } from '../produto-incluir/produto-incluir.interface';
import { HttpClient } from '@angular/common/http';
import { EstoqueService } from '../../estoque/estoque.service';


@Component({
  selector: 'app-produto-alterar',
  templateUrl: './produto-alterar.component.html',
  styleUrls: ['./produto-alterar.component.css'],
  providers: [EstoqueService]
})
export class ProdutoAlterarComponent implements OnInit {

  @ViewChild('modal', {static: false})
  public modal: PoModalComponent;

  public produto = {
    produto: '',
    quantidade: 0
  };

  close: PoModalAction = {
    action: () => {
      this.modal.close();
    },
    label: 'Cancelar',
    danger: true
  };

  confirm: PoModalAction = {
    action: this.salvar.bind(this),
    label: 'Salvar'
  };

  public readonly actions: Array<PoPageAction> = [
    { label: 'Voltar', url: '/home' },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Inicio', link: '/home' },
      { label: 'Opções Estoque' }
    ]
  };

  actionsTable: Array<PoTableAction> = [
    { action: this.abrirModal.bind(this), label: 'Alterar' },
    { action: this.deletar.bind(this), label: 'Deletar' }
  ];

  columns: Array<PoTableColumn>;
  items: Array<any>;

  constructor(
    public router: Router,
    private estoqueService: EstoqueService,
    private http: HttpClient,
    public poNotification: PoNotificationService
  ) { }

  ngOnInit() {
    this.columns = this.estoqueService.getColumns();
    this.estoqueService.getItems().subscribe(produtos => {
      this.items = produtos;
    });
  }

  abrirModal(row) {
    
    this.produto = row;
    this.modal.open();
  }

  salvar() {

    const valorAlteracao = {
      id: this.produto['codigo'],
      quantidade: this.produto.quantidade
    }

    this.http.put(`https://localhost:5000/api/produto/${valorAlteracao.id}/alterar`, valorAlteracao).subscribe(() => {
      this.poNotification.success('Produto alterado com sucesso!');
      this.modal.close();
    }, (erro) => {
      this.poNotification.error(erro);
    });

  }

  deletar(row) {
    this.http.delete(`https://localhost:5000/api/produto/${row.codigo}/excluir`).subscribe(() => {
      this.estoqueService.getItems().subscribe((produtos) => {
        this.poNotification.success('Produto deletado com sucesso!');
        this.items = produtos;
      });
    }, (erro) => {
      this.poNotification.error(erro);
    });
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }

  navegarAlterar() {
    this.router.navigateByUrl('');
  }

}
