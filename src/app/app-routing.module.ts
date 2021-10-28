import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 