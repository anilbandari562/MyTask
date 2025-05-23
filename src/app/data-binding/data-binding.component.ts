import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  message:string='Hello Good Morning';
  isDisabled:boolean=true;
  name:string='Anilkumar'

  mobile:string='+91';
  submit(){
    alert(this.mobile);
  }

  greet(){
    alert("Hellogood morning")
  }
  typing(){
    alert("Typing...........")
  }
  state(){
    alert("state")
  }
  num1:number=0;
num2:number=0;
sum:number=0;
calculate(){
  this.sum=this.num1+this.num2;
}
}


