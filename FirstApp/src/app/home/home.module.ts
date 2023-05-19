import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
