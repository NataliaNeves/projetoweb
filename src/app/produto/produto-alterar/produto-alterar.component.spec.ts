import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAlterarComponent } from './produto-alterar.component';

describe('EstoqueComponent', () => {
  let component: ProdutoAlterarComponent;
  let fixture: ComponentFixture<ProdutoAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
