// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CharacterComponent } from './character.component';

const routes: Routes = [{
  path: '',
  component: CharacterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {

  /**
   * Module constructor
   */
  constructor() { }
}
