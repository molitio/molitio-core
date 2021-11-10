import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListMoFormComponent } from './components/list-mo-form/list-mo-form.component';
import { MoFoAddressComponent } from './components/mo-fo-adress/mo-fo-adress.component';
import { MoFoMessageComponent } from './components/mo-fo-message/mo-fo-message.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MoFoQaaComponent } from './components/mo-fo-qaa/mo-fo-qaa.component';

@NgModule({
  declarations: [
    AppComponent,
    MoFoAddressComponent,
    ListMoFormComponent,
    LoginComponent,
    MoFoMessageComponent,
    PageNotFoundComponent,
    MoFoQaaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
