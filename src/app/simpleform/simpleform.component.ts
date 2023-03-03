import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';        //NgForm used here as a form datatype in getForm() function.
@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent {
  displayData:any={};
  getForm(data:NgForm)
  {
    this.displayData=data;
    console.log(data);
    console.log(this.displayData);
    
  }
}
