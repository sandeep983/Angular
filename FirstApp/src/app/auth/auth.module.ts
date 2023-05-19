import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
