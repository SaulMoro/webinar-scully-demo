// Angular
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { FooterComponent, HeaderComponent } from './components';
import { LayoutComponent } from './layout.component';

const EXPORTED_DECLARATIONS = [LayoutComponent];

@NgModule({
  declarations: [
    ...EXPORTED_DECLARATIONS,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...EXPORTED_DECLARATIONS]
})
export class LayoutModule {

  /**
   * Module constructor
   *
   * @param parentModule Layout module
   */
  constructor(@Optional() @SkipSelf() readonly parentModule: LayoutModule) {

    if (parentModule) {
      throw new Error('LayoutModule is already loaded. Import only in CoreModule');
    }
  }
}
