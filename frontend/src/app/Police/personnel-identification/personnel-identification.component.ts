import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Name', value: 'qedrwe' },
  {name: 'Rank', value: 'sdsf' },
  { name: 'state of Deployment', value: 'sfs' },
  { name: 'Identification Number', value: 'dadaqd' },
  { name: 'Area Command', value: 'dadaqd' },
];


@Component({
  selector: 'app-personnel-identification',
  templateUrl: './personnel-identification.component.html',
  styleUrls: ['./personnel-identification.component.css']
})
export class PersonnelIdentificationComponent implements OnInit {
  displayedColumns: string[] = ['name', 'value'];
  dataSource = ELEMENT_DATA;

  searchParams = [
    { value: 'name', viewValue: 'Name' },
    { value: 'identification_number', viewValue: 'Identification Number' }
  ];

  showResult = false



  constructor() { }

  show() {
    this.showResult = true
  }

  ngOnInit(): void {
  }

}
