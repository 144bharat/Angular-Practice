import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
count:number=0;

incre(vals:number)
{
  this.count=vals+1;
}
decre(vals:number)
{
  this.count=vals-1;
}
}
