import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { ListStockComponent } from './component/stock/list-stock/list-stock.component';
import { FormStockComponent } from './component/stock/form-stock/form-stock.component';
import { FormTransactionComponent } from './component/transaction/form-transaction/form-transaction.component';
import { ListTransactionComponent } from './component/transaction/list-transaction/list-transaction.component';
import { HomeComponent } from './component/home/home.component';
import { ListDividendComponent } from './component/dividend/list-dividend/list-dividend.component';
import { FormDividendComponent } from './component/dividend/form-dividend/form-dividend.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListStockComponent,
    FormStockComponent,
    FormTransactionComponent,
    ListTransactionComponent,
    HomeComponent,
    ListDividendComponent,
    FormDividendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
