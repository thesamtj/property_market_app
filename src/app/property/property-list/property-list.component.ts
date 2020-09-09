import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;

  constructor(private housingService: HousingService) {}

  ngOnInit() {
    this.housingService.getProperties().subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
