import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegistroComponent } from './public/login-registro/login-registro.component';
import { TablaComponent } from './public/tabla/tabla.component';
import { HeaderComponent } from './public/header/header.component';

const routes: Routes = [
  { path: '', component: LoginRegistroComponent },
  {
    path: 'tabla',
    component: TablaComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
