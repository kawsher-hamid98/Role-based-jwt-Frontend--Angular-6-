import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListComponent } from './components/list/list.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dash', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'list', component: ListComponent, canActivateChild: [AuthGuard],
  children: [
    {
      path: '',
      component: HomeComponent
    }
  ]
},
  {path: 'admin', component: AdminRegisterComponent},
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
