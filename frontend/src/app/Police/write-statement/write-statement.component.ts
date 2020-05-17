import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  value: string;
}

@Component({
  selector: 'app-write-statement',
  templateUrl: './write-statement.component.html',
  styleUrls: ['./write-statement.component.css']
})
export class WriteStatementComponent implements OnInit {



  constructor() { }

  show() {}
  ngOnInit(): void {
  }

}
