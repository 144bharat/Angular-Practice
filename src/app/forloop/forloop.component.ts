import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent {
users=["bharat","anil","sachin","simran","praveen"];
userDetails=[
  {name:"bharat",phone:9209328932},
  {name:"anil",phone:92098329832},
  {name:"simran",phone:9209122932},
];
}
