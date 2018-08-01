import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import {app_routing} from './app.routes';

// Servicios
import { ChampionsService } from './services/champions.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// NGX-BOOTSTRAP
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    NavbarComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing,
    FormsModule,
    NgxDatatableModule,
    ModalModule.forRoot()
  ],
  providers: [
    ChampionsService,
    RegisterService,
    LoginService,
    AuthService,
    TokenService,
    AfterLoginService,
    BeforeLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
