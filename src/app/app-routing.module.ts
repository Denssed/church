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
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  //General
  {
    path: 'dashboard',
    component: NavigationComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'bautismo', component: BaptismComponent },
      { path: 'presentacion', component: PresentationComponent },
      { path: 'registro', component: RecordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
