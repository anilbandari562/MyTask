import { Component } from '@angular/core';
import { VechiclesService } from '../vechicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvechicle',
  templateUrl: './createvechicle.component.html',
  styleUrls: ['./createvechicle.component.css']
})
export class CreatevechicleComponent {


  constructor(private _vehicleService:VechiclesService, private _router:Router){}
    public vehicleForm:FormGroup= new FormGroup({
      Vehicle:new FormControl(),
      color:new FormControl(),
      cost:new FormControl(),
      fuel:new FormControl(),
      manufacturer:new FormControl(),
      image:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      tyre:new FormControl()
    })

    submit(){
      console.log(this.vehicleForm.value);
      this._vehicleService.createVechicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Vechicle Created Successfully🤣");
        this._router.navigateByUrl('/my-website/vechicles')
      },(err:any)=>{
        alert("internal server error!")
      })
    

    }
  }



