import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[]{
    if(tag == "All")
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    
    return [
      {name : "All", count : 14},
      {name : "FastFood", count : 4},
      {name : "Pizza", count : 2},
      {name : "Lunch", count : 3},
      {name : "SlowFood", count : 2},
      {name : "Hamburger", count : 1},
      {name : "Fry", count : 1},
      {name : "Soup", count : 1},
    ];
  }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imgUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'], 
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['persia','middle','china'],
        star: 4.7,
        imgUrl: '/assets/food-2.jpg',
        tags: ['SlowFood','Lunch'], 
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['germany', 'us'],
        star: 4.5,
        imgUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'], 
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['belgium','france'],
        star: 3.3,
        imgUrl: '/assets/food-4.jpg',
        tags: ['FastFood','Fry'], 
      },
      {
        id: 5,
        name: 'Chicken Soup',
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['india','asia'],
        star: 4.5,
        imgUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'], 
      },
      {
        id: 6,
        name: 'Vegetable Pizza',
        cookTime: '40-50',
        price: 9,
        favorite: true,
        origins: ['italy'],
        star: 4,
        imgUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'], 
      }
    ]
      
  }
}
