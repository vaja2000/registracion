import { Component } from '@angular/core';
import { StudentInfo } from './models/stud.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student:StudentInfo = new StudentInfo()
  showCard:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  subBtn(): void {
    this.showCard = true
  }
}
