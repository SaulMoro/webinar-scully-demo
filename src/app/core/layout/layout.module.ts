// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { FooterComponent, HeaderComponent } from './components';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
