// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  /**
   * Module constructor
   */
  constructor() { }
}
