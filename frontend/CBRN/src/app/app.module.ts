import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapComponent} from "./maps/map.component";
import {FormsModule} from "@angular/forms";
import {MarkerComponent} from "./markers/marker.component";


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
