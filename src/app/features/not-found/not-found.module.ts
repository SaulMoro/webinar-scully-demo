// Angular
import { NgModule } from '@angular/core';

// Routing
import { NotFoundRoutingModule } from './not-found-routing.module';

// Components
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [NotFoundRoutingModule]
})
export class NotFoundModule {

  /**
   * Module constructor
   */
  constructor() { }
}
