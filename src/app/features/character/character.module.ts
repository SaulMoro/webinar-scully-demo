// Angular
import { NgModule } from '@angular/core';

// Routing
import { CharacterRoutingModule } from './character-routing.module';

// Components
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [CharacterComponent],
  imports: [CharacterRoutingModule]
})
export class CharacterModule { }
