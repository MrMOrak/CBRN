import {Component, Input} from "@angular/core";
import {icon, latLng, Layer, marker, tileLayer} from "leaflet";

@Component({
  selector: "marker",
  templateUrl: './marker.component.html'
})
export class MarkerComponent {
  @Input() lat: number;
  @Input() lng: number;

  // Open Street Map definitions
  LAYER_OSM = tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: 'Open Street Map'
  });

  // Values to bind to Leaflet Directive
  options = {
    layers: [this.LAYER_OSM],
    zoom: 10,
    center: latLng(51.49118863428682, 7.226257324218751)
  };

  markers: Layer[] = [];
  selectedColor : string = "./../../assets/marker-green.png";

  addMarker() {
    const newMarker = marker(
      //[ this.lat, this.lng ],
      [this.lat, this.lng],
      {
        icon: icon({
          iconSize: [30, 30],
          iconAnchor: [13, 41],
          iconUrl: this.selectedColor,
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

  onSelected(value:string): void{
    if(value == "Grün")
    {this.selectedColor = "./../../assets/marker-green.png;";}
    else if(value == "Rot"){
      this.selectedColor = "./../../assets/marker-red.png";}
    else if(value == "Gelb"){
      this.selectedColor = "./../../assets/marker-yellow.png";}

  }

}
