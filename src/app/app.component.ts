import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Child-Data';
  name = '';
  age = "";
  email = ""
  fromParent(data: any) {
    this.name = data.name;
    this.age = data.age;
    this.email = data.email;
    console.log(data)
  }
}
