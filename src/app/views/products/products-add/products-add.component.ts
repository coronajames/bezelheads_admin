import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {
  formBasic: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;
  chooseFileName: '';
  photos = [
    {
      photo : './assets/images/products/speaker-1.jpg'
    },
    {
      photo : './assets/images/products/speaker-1.jpg'
    },
    {
      photo : './assets/images/products/speaker-1.jpg'
    }
  ];
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastr.success('Profile updated.', 'Success!', {progressBar: true});
    }, 3000);
  }

}
