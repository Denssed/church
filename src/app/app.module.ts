import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


//Components
import { FormComponent } from './Components/form/form.component';
import { ButtonComponent } from './Components/button/button.component';
import { NavTabComponent } from './Components/nav-tab/nav-tab.component';
import { ModalFormComponent } from './Components/modal-form/modal-form.component';
import { ModalDeleteComponent } from './Components/modal-delete/modal-delete.component';


//Containers
import { NavigationComponent } from './Container/navigation/navigation.component';
import { LoginComponent } from './Container/login/login.component';
import { AdminComponent } from './Container/admin/admin.component';
import { BaptismComponent } from './Container/baptism/baptism.component';
import { PdfComponent } from './Components/pdf/pdf.component';



//Material
import { MaterialModule } from './material.module';
import { RecordComponent } from './Container/record/record.component';
import { PresentationComponent } from './Container/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    LoginComponent,
    ButtonComponent,
    NavTabComponent,
    AdminComponent,
    ModalFormComponent,
    ModalDeleteComponent,
    BaptismComponent,
    PdfComponent,
    RecordComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
