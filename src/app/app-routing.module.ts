import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    {path:'My-Website',component:MyWebsiteComponent,children:[
    {path:'Home',component:HomeComponent},
    {path:'Welcome',component:WelcomeComponent},
    {path:'Data-Binding',component:DataBindingComponent},
    {path:'Calculator',component:CalculatorComponent}, 
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
