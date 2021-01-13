// Angular
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Scullyio
import { ScullyLibModule } from '@scullyio/ng-lib';

// @wsd packages
import { CoreModule } from '@wsd/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ScullyLibModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  /**
   * Module constructor
   */
  constructor() { }
}
