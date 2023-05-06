import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() fromParent: EventEmitter<any> = new EventEmitter;
  constructor() {

  }
  ngOnInit(): void {
    // this.fromParent.emit(data)

  }
  syncData() {
    let data = {
      name: 'subhadeep',
      age: 26,
      email: 'test@test.com'
    }
    this.fromParent.emit(data);
  }
}


