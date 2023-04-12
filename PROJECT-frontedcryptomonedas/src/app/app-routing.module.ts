import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegistroComponent } from './public/login-registro/login-registro.component';
import { TablaComponent } from './public/tabla/tabla.component';

const routes: Routes = [
  { path: '', component: LoginRegistroComponent },
  {
    path: 'tabla',
    component: TablaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
