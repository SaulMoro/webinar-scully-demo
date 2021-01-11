// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wsd-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent { }
