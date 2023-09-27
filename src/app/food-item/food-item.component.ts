import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {
  @Input() name: string = ''; // Provide a default value
  @Input() price: number = 0; // Provide a default value
}

