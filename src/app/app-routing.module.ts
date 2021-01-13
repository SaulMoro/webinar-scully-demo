// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/characters/characters.module')
      .then(module => module.CharactersModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./features/character/character.module')
      .then(module => module.CharacterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  /**
   * Module constructor
   */
  constructor() { }
}
