import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  template: `
    <p>
     This is users page!
    </p>
  `,
  styles: [
  ]
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
