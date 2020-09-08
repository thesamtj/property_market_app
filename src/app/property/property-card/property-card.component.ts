import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  property:any = {
    "id": "1",
    "name": "SamTJ",
    "type": "house",
    "price": "5000",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
