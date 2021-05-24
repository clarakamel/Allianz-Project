import { Component, OnInit } from '@angular/core';
import { InfoService } from '../InfoService/info.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-data-confirmation',
  templateUrl: './data-confirmation.component.html',
  styleUrls: ['./data-confirmation.component.css'],
})
export class DataConfirmationComponent implements OnInit {
  email:String = "";
  public nationalID!: Number;
  fullName:String = "";
  public mobileNumber!: Number;
  public passportNumber!: Number;
  mobNumberPattern = /^01+[0-9]+$/;
  
  Message: String = '';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public From: String = '';





  public comingDay!: Number;
  public comingMonth!: Number;
  public comingYear!: Number;

  public goingDay!: Number;
  public goingMonth!: Number;
  public goingYear!: Number;

  public dayOfBirth!: Number;
  public monthOfBirth!: Number;
  public yearOfBirth!: Number;

  inputForm!: FormGroup;


  constructor(private data: InfoService, private myRouter: Router, private formBuilder: FormBuilder) {

     this.getData()
   }

   range = new FormGroup({
    email: new FormControl('', Validators.required),
    nationalID: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    passportNumber: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),

  });
  ngOnInit(): void {
      this.getData();
      this.inputForm = this.formBuilder.group({
        email: new FormControl('', Validators.required),
        nationalID: new FormControl('', Validators.required),
        fullName: new FormControl('', Validators.required),
        passportNumber: new FormControl('', Validators.required),
        mobileNumber: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        
      });
  }

  getData(){
    this.From = this.data.Destination;
    this.comingMonth = this.data.fromDate.getMonth()+1;
    this.comingDay = this.data.fromDate.getDate()
    this.comingYear = this.data.fromDate.getFullYear();
    this.goingMonth = this.data.toDate.getMonth()+1;
    this.goingDay = this.data.toDate.getDate()
    this.goingYear = this.data.toDate.getFullYear();
  }


  Redirect(){
    this.myRouter.navigate(['/home']);
  }

}
