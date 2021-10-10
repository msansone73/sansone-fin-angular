import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListStockComponent } from './component/stock/list-stock/list-stock.component';
import { ListTransactionComponent } from './component/transaction/list-transaction/list-transaction.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list-stock', component: ListStockComponent},
  {path: 'list-transaction', component: ListTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
