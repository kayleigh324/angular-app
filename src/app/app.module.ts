import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-item/food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FoodListComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
