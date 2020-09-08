import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any> = [
    {
    "id": 1,
    "name": "SamTJ",
    "type": "house1",
    "price": 5000
  },
  {
    "id": 2,
    "name": "SamTJ",
    "type": "house2",
    "price": 6000
  },
  {
    "id": 3,
    "name": "SamTJ",
    "type": "house3",
    "price": 7000
  },
  {
    "id": 4,
    "name": "SamTJ",
    "type": "house4",
    "price": 8000
  },
  {
    "id": 5,
    "name": "SamTJ",
    "type": "house5",
    "price": 9000
  },
  {
    "id": 6,
    "name": "SamTJ",
    "type": "house6",
    "price": 3000
  }
]

  constructor() { }

  ngOnInit() {
  }

}
