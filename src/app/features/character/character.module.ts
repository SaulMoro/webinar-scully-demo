// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routing
import { CharacterRoutingModule } from './character-routing.module';

// Components
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule {

  /**
   * Module constructor
   */
  constructor() { }
}
