import { Component } from '@angular/core';
import {FoodService} from "../../services/food/food.service";
import {Food} from "../../shared/models/Food";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {

  }

  ngOnInit() {
    this.foods = this.foodService.getAll()
  }
}
