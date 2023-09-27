import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodItems = [
    { name: 'Food 1', price: 10 },
    { name: 'Food 2', price: 12 },
    { name: 'Food 3', price: 8 },
    { name: 'Food 4', price: 15 },
    { name: 'Food 5', price: 9 }
  ];
}
