import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crime-report',
  templateUrl: './crime-report.component.html',
  styleUrls: ['./crime-report.component.css']
})
export class CrimeReportComponent implements OnInit {
  form = new FormGroup({
    report: new FormControl,
    fileSource: new FormControl
  })
  imageSrc: string;

  constructor(private router: Router) { }
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
