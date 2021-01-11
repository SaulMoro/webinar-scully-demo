// Angular
import { NgModule } from '@angular/core';

// Routing
import { PostRoutingModule } from './post-routing.module';

// Components
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [PostRoutingModule]
})
export class PostModule { }
