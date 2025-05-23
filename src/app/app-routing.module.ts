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
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { VechiclesComponent } from './vechicles/vechicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { CreatevechicleComponent } from './createvechicle/createvechicle.component';
import { CardsComponent } from './cards/cards.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    {path:'My-Website',component:MyWebsiteComponent,children:[
    {path:'Home',component:HomeComponent},
    {path:'Welcome',component:WelcomeComponent},
    {path:'Data-Binding',component:DataBindingComponent},
    {path:'Calculator',component:CalculatorComponent}, 
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'vechicles',component:VechiclesComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'createvechicle',component:CreatevechicleComponent},
    {path:'cards',component:CardsComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'form',component:FormComponent},


  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
