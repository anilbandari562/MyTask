import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees:any = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ];
  delete(i:number){
    alert(i);
    this.employees.splice(i,1);
  }

packageHIghToLOw(){
  this.employees.sort((a:any,b:any)=>b.package-a.package);
}
role:any='';
rolefilter(){
  this.employees=this.employees.filter((employee:any)=>employee.role==this.role);
}

term:any='';
search(){
    this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.role));
}


bonus(){
  this.employees=this.employees.map((employee:any)=>{
    employee.package=this.employees.package+30000;
    return employee
  });
}

}
