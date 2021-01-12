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
    path: 'blog',
    loadChildren: () => import('./features/blog/blog.module')
      .then(module => module.BlogModule)
  },
  {
    path: 'blog/:id',
    loadChildren: () => import('./features/post/post.module')
      .then(module => module.PostModule)
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
