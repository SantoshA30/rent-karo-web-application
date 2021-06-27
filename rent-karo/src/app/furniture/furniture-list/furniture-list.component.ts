// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// Project
import { Furniture } from '../furniture.model';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent implements OnInit {
  furnitures: Furniture[];
  furnitureList;

  constructor(private route: ActivatedRoute,
    private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.getFurnitureListDetailFromFurnitureService();
  }

  displayFurnitureListBasedOnId() {
    // get furniture id from route
    const routeParams = this.route.snapshot.paramMap;
    const furnitureIdFromRoute = Number(routeParams.get('furnitureId'));

    // check if furniture id from route & furniture id from json data match
    this.furnitureList = this.furnitures.find(f => f.id === furnitureIdFromRoute);
  }

  getFurnitureListDetailFromFurnitureService() {
    this.furnitureService.getFurniture().subscribe(
      (data: any) =>
          {
            this.furnitures = data;
            console.log(this.furnitures);
            this.displayFurnitureListBasedOnId();
           });
  }

}
