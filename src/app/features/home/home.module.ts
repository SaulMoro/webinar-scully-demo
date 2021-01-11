// Angular
import { NgModule } from '@angular/core';

// Routing
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule]
})
export class HomeModule { }
