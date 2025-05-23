import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  //age:number=12;

  age:number[]=[11,12,15,65,66,85,95,58,64]

  states:string[]=['telangana','ap','karnataka','tamilnadu']

  products:any[]=[
    {name:'pen',price:100,rating:4.6},
    {name:'book',price:3000,rating:4.2},
    {name:'shirt',price:100,rating:4.6},
    {name:'laptop',price:100,rating:4.6},
    {name:'bike',price:100,rating:4.6},
    {name:'car',price:100,rating:4.6},
  ]

  
  toady:any = new Date();
    }

