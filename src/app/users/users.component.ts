import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
myimage1:string="assets/Images/image1.jpg";
myimage2:string="assets/Images/image2.jpg";
myimage3:string="assets/Images/image3.jpg";
myimage4:string="assets/Images/image4.jpg";
myimage5:string="assets/Images/image5.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
