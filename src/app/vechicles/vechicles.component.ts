import { Component } from '@angular/core';
import { VechiclesService } from '../vechicles.service';

@Component({
  selector: 'app-vechicles',
  templateUrl: './vechicles.component.html',
  styleUrls: ['./vechicles.component.css']
})
export class VechiclesComponent {

  vechicles:any=[];
  

  constructor(private _vechicleService:VechiclesService){
    _vechicleService.getVechicles().subscribe((data:any)=>{
      console.log(data);
      this.vechicles=data;
      console.log(this.vechicles);
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
  }

  loadvehicles(){
    this._vechicleService.getVechicles().subscribe((data:any)=>{
      console.log(data);
      this.vechicles=data;
      console.log(this.vechicles);
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )

    
  }

  keywords:any='';
  search(){
    this._vechicleService.filteredVechicles(this.keywords).subscribe(
      (data:any)=>{
        console.log(data);
        this.vechicles=data
      }
    )
  }

  column:any='';
  order:any='';
  sort(){
    this._vechicleService.sortedVechicles(this.column,
      this.order).subscribe(
        (data:any)=>{
          console.log(data);
          this.vechicles=data
        },(err:any)=>{
          alert("Internal Server Error!")
        }
        )
        }

        //pagination
        limit:number=0;
        page:number=0;
        pagination(){
          this._vechicleService.paginatedVechicles(this.limit,this.page)
          .subscribe(
            (data:any)=>{
              console.log(data);
              this.vechicles=data;
            },(err:any)=>{
              alert("internal server error")
            }
          )
        }

        delete(id:number){
          if(confirm("Are you sure to delete")==true){
          this._vechicleService.deleteVechicle(id).subscribe(
            (data:any)=>{
              alert("Record deleted successfully!");
              this.loadvehicles();
            },(err:any)=>{
              alert("Internal Server Error")
            }
          
          )
        
        }else{
          alert("you have cancelled delete")
        }
      }
    }
  