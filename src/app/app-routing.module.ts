import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { NavigationComponent } from './Container/navigation/navigation.component';
import { LoginComponent } from './Container/login/login.component';
import { AdminComponent } from './Container/admin/admin.component';
import { BaptismComponent } from './Container/baptism/baptism.component';
import { PresentationComponent } from './Container/presentation/presentation.component';
import { RecordComponent } from './Container/record/record.component';

const routes: Routes = [
  //Login
  { path: 'login', component: LoginComponent },
  // { path: 'login/recuperar', component: RecuperarclaveComponent},
  //General
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      // { path: 'contable', component: NavigationComponent },
      { path: 'bautismo', component: BaptismComponent },
      { path: 'presentacion', component: PresentationComponent },
      { path: 'registro', component: RecordComponent },
      // { path: 'matrimonial', component: NavigationComponent },
      // { path: 'departamentos', component: NavigationComponent },
      // { path: 'gruposCasa', component: NavigationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
