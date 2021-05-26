import { Component, OnInit } from '@angular/core';
import { LoginService } from './../LoginService/login.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Modal2Component } from '../modal2/modal2.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:String= "";
  Password:String = "";
  Message:String = "";
  hide = true;

  constructor(private l: LoginService, private myRouter: Router,  public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

//   Login(){

//     if(this.l.Ulogin(this.Username, this.Password)){
//       // console.log("success")
//       this.myRouter.navigate(['/home']);
//     }
//     else if(this.l.Ulogin(this.Username, this.Password) == false){
//       this.openDialog();
//     }
// }

  Login(){

      this.myRouter.navigate(['/home']);
}

openDialog(): void {
  const dialogRef = this.dialog.open(Modal2Component, {
    width: '300px',
    data: {}
  });

  dialogRef.afterClosed().subscribe(result => {
    this.Message = result;
  });

}
}


