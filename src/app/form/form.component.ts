import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Доставка до квартиры'
  }, {
    type: 'no',
    text: 'Доставка до подъезда'
  }];

  defoultAnswer = 'yes';
  defoultCity = 'dn';
  street: string | undefined;
  house: string | undefined;
  flat: string | undefined;
  tel: string | undefined;
  firstName: string | undefined;


  formData = {};
  isSubmited = false;

  onSubmit(form: NgForm) {
    console.log(form);
    this.isSubmited = true;
    // this.formData = this.form.value;
    // this.form.reset();
  }

  condition: boolean = true;
  toggle() {
    this.condition = !this.condition;
  }
}
