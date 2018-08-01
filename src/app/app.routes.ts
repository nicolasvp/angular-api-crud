
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AfterLoginService] },
  { path: 'champions', component: TableComponent, canActivate: [AfterLoginService] },
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
