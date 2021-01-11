import { NgModule } from '@angular/core';
import { Routes, RouterModule, Data } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainContainerComponent } from './core/main-container/main-container.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'home/:userName', component: MainContainerComponent },
  { path: '', component: MainContainerComponent },
  { path: 'home', component: MainContainerComponent } ///   to fix
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
