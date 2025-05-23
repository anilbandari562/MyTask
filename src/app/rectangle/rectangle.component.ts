import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  Length:number=0;
  Breadth:number=0;
  sum:number=0;
  calculate(){
    this.sum=this.Length+this.Breadth;
  }

}
