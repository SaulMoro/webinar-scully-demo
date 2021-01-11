// Angular
import { NgModule } from '@angular/core';

// Routing
import { CharactersRoutingModule } from './characters-routing.module';

// Components
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CharactersRoutingModule]
})
export class CharactersModule { }
