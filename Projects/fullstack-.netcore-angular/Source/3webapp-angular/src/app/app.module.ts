import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfessorsListComponent } from './components/professors-list/professors-list.component';
import { EditProfessorComponent } from './components/edit-professor/edit-professor.component';
import { RemoveProfessorComponent } from './components/remove-professor/remove-professor.component';
import { AddProfessorComponent } from './components/add-professor/add-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    PageNotfoundComponent,
    FooterComponent,
    DashboardComponent,
    ProfessorsListComponent,
    EditProfessorComponent,
    RemoveProfessorComponent,
    AddProfessorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
