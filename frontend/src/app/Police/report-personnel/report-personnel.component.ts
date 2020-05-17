import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Name', value: 'qedrwe' },
  { name: 'Rank', value: 'sdsf' },
  { name: 'state of Deployment', value: 'sfs' },
  { name: 'Identification Number', value: 'dadaqd' },
  { name: 'Area Command', value: 'dadaqd' },
];

@Component({
  selector: 'app-report-personnel',
  templateUrl: './report-personnel.component.html',
  styleUrls: ['./report-personnel.component.css']
})
export class ReportPersonnelComponent implements OnInit {

  displayedColumns: string[] = ['name', 'value'];
  dataSource = ELEMENT_DATA;

  searchParams = [
    { value: 'name', viewValue: 'Name' },
    { value: 'identification_number', viewValue: 'Identification Number' }
  ];

  showResult = false
  showReportForm = false
  form: FormGroup;
  imageSrc: string;

  constructor(private router: Router) { }

  show() {
    this.showResult = true
  }

  report() {
    this.showReportForm = true
  }

  // Image Preview
  onFileChange(event) {

    const reader = new FileReader();



    if (event.target.files && event.target.files.length) {

      const [file] = event.target.files;

      reader.readAsDataURL(file);



      reader.onload = () => {



        this.imageSrc = reader.result as string;



        this.form.patchValue({

          fileSource: reader.result

        });



      };



    }

  }


  submit() {
    alert('Thanks For the report')
    this.router.navigateByUrl('/police/dashboard')

  }


  ngOnInit(): void {
  }

}
