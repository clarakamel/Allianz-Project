import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { InfoService } from '../InfoService/info.service';
import { slideInOutAnimation } from '../animations/animations.component';


interface DialogData {
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInOutAnimation],
})


export class HomeComponent implements OnInit {

  title = 'angular-mat-datepicker-range';
  dateRangeForm!: FormGroup;
  minDate!: Date;
  maxDate!: Date;
  minimumDate!: Date;
  maximumDate!: Date;
  Date!: Date;
  Message: String = '';
  Travel: String = '';
  DepartDate!: Date;
  ReturnDate!: Date;
  BirthDate!: Date;
  selected = 'option2';

  

  



  constructor(private myRouter: Router, private formBuilder: FormBuilder, public dialog: MatDialog, private information: InfoService ) { 
    const currentYear = new Date().getFullYear();
    const x = new Date().getDate()
    this.minDate = new Date(currentYear, new Date().getMonth(), new Date().getUTCDate()),
    this.maxDate = new Date(currentYear + 20, 11, 31);
    this.minimumDate = new Date(currentYear - 100, 11, 31),
    this.maximumDate = new Date(currentYear, new Date().getMonth(), new Date().getUTCDate());
    // this.information.Destination = this.Travel;
    // this.information.fromDate = new Date(this.DepartDate.getFullYear(),this.DepartDate.getUTCMonth(),this.DepartDate.getUTCDay());
    // this.information.toDate = this.ReturnDate;
    // this.information.Birthday = this.BirthDate;
    


  }
  range = new FormGroup({
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    checkBox: new FormControl('', Validators.required),
    options: new FormControl('', Validators.required),

  });
  ngOnInit(): void {
    this.dateRangeForm = this.formBuilder.group({
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      checkBox: new FormControl('', Validators.required),
      options: new FormControl('', Validators.required),
      
    });

  }
  onFormSubmit() {
    console.log('Is Form Invalid', this.dateRangeForm.invalid);
  }
  Redirect(){
      if(this.dateRangeForm.invalid == true){
      console.log('form empty');
      this.onChangeInputs()
      console.log(this.Travel);
      console.log(this.information.fromDate);
      console.log(this.information.toDate);
      this.checkValid()
      this.openDialog()

      }else{
        this.onChangeInputs()
        this.myRouter.navigate(['/package']);
      }
}

onChangeInputs(){
  this.information.Destination = this.Travel;
  this.information.fromDate = this.DepartDate;
  this.information.toDate = this.ReturnDate;
  this.information.Birthday = this.BirthDate;

}

checkValid(): boolean{
  if((this.DepartDate.getUTCDay() < this.BirthDate.getUTCDay()) || (this.DepartDate.getMonth() > this.BirthDate.getMonth()) || (this.DepartDate.getFullYear() > this.BirthDate.getFullYear())){
 return false;
  }
  else{
    return true;  
  }
}

openDialog(): void {
  const dialogRef = this.dialog.open(ModalComponent, {
    width: '300px',
    data: {}
  });

  dialogRef.afterClosed().subscribe(result => {
    this.Message = result;
  });

}


}

