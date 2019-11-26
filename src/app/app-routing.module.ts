import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IncluirCompraComponent } from './incluir-compra/incluir-compra.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoIncluirComponent } from './produto/produto-incluir/produto-incluir.component';
import { ProdutoAlterarComponent } from './produto/produto-alterar/produto-alterar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'incluircompra', component: IncluirCompraComponent},
  { path: 'estoque', component: EstoqueComponent},
  { path: 'fornecedores', component: FornecedoresComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'produto/incluir', component: ProdutoIncluirComponent},
  { path: 'produto/alterar', component: ProdutoAlterarComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
