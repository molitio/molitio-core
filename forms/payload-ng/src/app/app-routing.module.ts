import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListMoFormComponent } from './components/list-mo-form/list-mo-form.component';
import { LoginComponent } from './components/login/login.component';
import { MoFoAddressComponent } from './components/mo-fo-adress/mo-fo-adress.component';
import { MoFoMessageComponent } from './components/mo-fo-message/mo-fo-message.component';
import { MoFoQaaComponent } from './components/mo-fo-qaa/mo-fo-qaa.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageNotFoundComponent },
  { path: 'admin', component: ListMoFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'message', component: MoFoMessageComponent },
  { path: 'address', component: MoFoAddressComponent },
  { path: 'qaa', component: MoFoQaaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
