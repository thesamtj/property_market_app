import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  property:Array<any> = [
    {
    "id": 1,
    "name": "SamTJ",
    "type": "house",
    "price": 5000
  },
  {
    "id": 2,
    "name": "SamTJ",
    "type": "house",
    "price": 5000
  },
  {
    "id": 3,
    "name": "SamTJ",
    "type": "house",
    "price": 5000
  },
  {
    "id": 4,
    "name": "SamTJ",
    "type": "house",
    "price": 5000
  },
  {
    "id": 5,
    "name": "SamTJ",
    "type": "house",
    "price": 5000
  },
  {
    "id": 6,
    "name": "SamTJ",
    "type": "house",
    "price": 5000
  }
]

  constructor() { }

  ngOnInit() {
  }

}
