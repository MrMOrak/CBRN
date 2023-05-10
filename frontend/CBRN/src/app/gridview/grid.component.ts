import {Component} from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: [
    "./grid.css"
  ]
})

export class GridComponent {

tiles: Tile[] = [
  {text: 'One', cols: 3, rows: 4, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
];
}
