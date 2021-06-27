// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { Furniture } from "./furniture.model";
import { FurnitureService } from './furniture.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  furnitureList: Furniture[];

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.getFurnitureList();
  }

  getFurnitureList() {
    this.furnitureService.getFurniture().subscribe(
      (data: any) => {
         this.furnitureList = data;
      });
  }
}
