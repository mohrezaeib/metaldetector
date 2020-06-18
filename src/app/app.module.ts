import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchFormComponent } from './components/home/search-form/search-form.component';
import { ProductComponent } from './components/home/product/product.component';
import { HomeComponent } from './components/home/home/home.component';
import {FormsModule} from "@angular/forms";
import { ServerComponent } from './server/server.component';
import {DataService} from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchFormComponent,
    ProductComponent,
    HomeComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
