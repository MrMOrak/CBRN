import {Component, Input} from "@angular/core";
import {icon, latLng, Layer, marker, tileLayer} from "leaflet";

@Component({
  selector: "marker",
  templateUrl: './marker.component.html'
})
export class MarkerComponent{
     @Input() lat: number;
     @Input() lng: number;

  // Open Street Map definitions
  LAYER_OSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' });

  // Values to bind to Leaflet Directive
  options = {
    layers: [ this.LAYER_OSM ],
    zoom: 10,
    center: latLng(51.49118863428682, 7.226257324218751)
  };

  markers: Layer[] = [];

  addMarker() {
    const newMarker = marker(
      [ this.lat, this.lng ],
      {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/leaflet/marker-icon.png',
          iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
          shadowUrl: 'assets/leaflet/marker-shadow.png'
        })
      }
    );

    this.markers.push(newMarker);
  }

  removeMarker() {
    this.markers.pop();
  }
}
