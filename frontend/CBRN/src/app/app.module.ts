import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapComponent} from "./maps/map.component";
import {FormsModule} from "@angular/forms";
import {MarkerComponent} from "./markers/marker.component";
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from "./dashboards/dashboard.component";
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from "@angular/material/grid-list";
import {GridComponent} from "./gridview/grid.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarkerComponent,
    DashboardComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
