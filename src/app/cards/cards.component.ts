import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

    cards:any=[];
      
    
      constructor(private _cardsService:CardsService){
        _cardsService.getcards().subscribe((data:any)=>{
          console.log(data);
          this.cards=data;
          console.log(this.cards);
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
      }
}
