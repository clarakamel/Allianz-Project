import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
// import { slideInOutAnimation } from '../animations/animations.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
  // animations: [slideInOutAnimation],
  // host: { '[@slideInOutAnimation]': '' }
})
export class StepperComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this  ._formBuilder.group({
      
   
    });
    this.secondFormGroup = this._formBuilder.group({
      checkBox: ['', Validators.required]
    });
  }
}