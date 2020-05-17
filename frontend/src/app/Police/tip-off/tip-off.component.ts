import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip-off',
  templateUrl: './tip-off.component.html',
  styleUrls: ['./tip-off.component.css']
})
export class TipOffComponent implements OnInit {

  form = new FormGroup({
    report: new FormControl,
    address: new FormControl,
    lga: new FormControl,
    state: new FormControl,
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
    alert('Thanks For the Tip off')
    this.router.navigateByUrl('/police/dashboard')

  }

  ngOnInit(): void {
  }

}
