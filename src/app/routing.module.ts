import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/schoolfellow/create/create.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule }             from '@angular/core';
import { SchoolfellowComponent } from './components/schoolfellow/schoolfellow.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'schoolfellow', component: SchoolfellowComponent},
    { path: 'create', component: CreateComponent}
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class RoutingModule {} 