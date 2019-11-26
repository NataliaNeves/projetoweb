import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { IncluirCompraComponent } from './incluir-compra/incluir-compra.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoIncluirComponent } from './produto/produto-incluir/produto-incluir.component';
import { ProdutoAlterarComponent } from './produto/produto-alterar/produto-alterar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncluirCompraComponent,
    EstoqueComponent,
    FornecedoresComponent,
    ProdutoComponent,
    ProdutoIncluirComponent,
    ProdutoAlterarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PoModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
