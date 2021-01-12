// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { BlogComponent } from './blog.component';

const routes: Routes = [{
  path: '',
  component: BlogComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {

  /**
   * Module constructor
   */
  constructor() { }
}
