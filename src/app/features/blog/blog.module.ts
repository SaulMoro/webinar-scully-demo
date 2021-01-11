// Angular
import { NgModule } from '@angular/core';

// Routing
import { BlogRoutingModule } from './blog-routing.module';

// Components
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [BlogRoutingModule]
})
export class BlogModule { }
