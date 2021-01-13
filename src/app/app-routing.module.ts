// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/characters'
  },
  {
    path: 'characters',
    loadChildren: () => import('./features/characters/characters.module')
      .then(module => module.CharactersModule)
  },
  {
    path: 'characters/:id',
    loadChildren: () => import('./features/character/character.module')
      .then(module => module.CharacterModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module')
      .then(module => module.NotFoundModule)
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
