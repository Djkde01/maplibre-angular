import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxMapLibreGLModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
