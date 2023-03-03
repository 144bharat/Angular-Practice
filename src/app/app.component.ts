import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice1';
  data:string = '';
  name:string="bharat";


  dynamiccolor:string = "green";
  chkdisable:boolean=false;
  getVal(val:string)
  {
    this.data=val;
    console.log(val);
  }
  togglevar:string='none';
  togglecontent()
  {
    if(this.togglevar==='none')
    {
      this.togglevar='block';
    }else{
      this.togglevar='none';
    }
  }
}
