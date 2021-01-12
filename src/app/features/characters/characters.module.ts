// Angular
import { NgModule } from '@angular/core';

// @wsd packages
import { SharedModule } from '@wsd/shared';

// Routing
import { CharactersRoutingModule } from './characters-routing.module';

// Components
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule {

  /**
   * Module constructor
   */
  constructor() { }
}
