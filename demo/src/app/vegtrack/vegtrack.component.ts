import { Component, OnInit } from '@angular/core';

export class VegTrack {
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ){

  }
}
@Component({
  selector: 'app-vegtrack',
  templateUrl: './vegtrack.component.html',
  styleUrls: ['./vegtrack.component.css']
})
export class VegtrackComponent implements OnInit {
  vegtracks = [
    new VegTrack(1, 'Potato', false, new Date()),
    new VegTrack(2, 'Beetroot', false, new Date()),
    new VegTrack(3, 'Onion', false, new Date()),
    new VegTrack(4, 'Tomato', false, new Date()),
  ];
  /* vegtracks=[
     { id: 1, description: "dance" },
     { id: 2, description: "sing" },
     { id: 3, description: "bath" }
  ];
 */
  constructor() { }

  ngOnInit() {
  }

}
