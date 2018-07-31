import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import {app_routing} from './app.routes';

// Servicios
import { ChampionsService } from './services/champions.service';
import { LoginService } from './services/login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    NavbarComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [
    ChampionsService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
