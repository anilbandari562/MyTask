import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
addcard() {
throw new Error('Method not implemented.');
}
userForm: any;
cardsFormArray: any;
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee');
        }else{
            this.userForm.addControl('hostelfee',new FormControl());
            this.userForm.removeControl('busfee');
          }
        }
      )
    }
  
    deletecard(i:number){
      this.cardsFormArray.removeAt(i);
    }
  public :FormGroup=new FormGroup({
  name:new FormControl(),
  mobile:new FormControl(),
  email: new FormControl(),
  password:new FormControl(),
  
  address:new FormControl({
    city:new FormControl(),
    state:new FormControl(),
    pin: new FormControl()
  })
  })
} 
    
  
      

