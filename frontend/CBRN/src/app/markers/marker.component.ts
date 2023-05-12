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

  selectedColor : string = "./../../assets/marker-green.png";

  markerGreen = marker(latLng(51.5, 7.3),{
    icon: icon({
      iconUrl:this.selectedColor,
      iconSize: [30, 30],
      iconAnchor: [13, 41]
    })
  });

  markerGreen2 = marker(latLng(51.78, 7.3),{
    icon: icon({
      iconUrl:this.selectedColor,
      iconSize: [30, 30],
      iconAnchor: [13, 41]
    })
  });

  markerYellow = marker(latLng(52, 7.4),{
    icon: icon({
      iconUrl:"./../../assets/marker-yellow.png",
      iconSize: [30, 30],
      iconAnchor: [13, 41]
    })
  });

  markerRed = marker(latLng(51.3, 7.2),{
    icon: icon({
      iconUrl:"./../../assets/marker-red.png",
      iconSize: [30, 30],
      iconAnchor: [13, 41]
    })
  });


  markers: Layer[] = [this.markerGreen,this.markerGreen2, this.markerYellow, this.markerRed];

  addMarker() {
    const newMarker = marker(
      //[ this.lat, this.lng ],
      [this.lat, this.lng],
      {
        icon: icon({
          iconSize: [30, 30],
          iconAnchor: [13, 41],
          iconUrl: this.selectedColor
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
