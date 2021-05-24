import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public data: Object[] = [];
  x: any;

  constructor(private http:HttpClient) { }

  Ulogin (username: String, password: String):boolean{
    this.http.get("http://localhost:7101/Application1-RESTWebService-context-root/rest/1/login").subscribe((results) =>  this.data.push((results.items)));
    console.log(this.data[0]); 

    for(var i = 0; i < this.data[0].length ; i++) {  
       for(var j = 0; j <= (this.data[0].length) -1; j++) {
          if(username == this.data[i][j].UserName && password == this.data[i][j].Pass){
            console.log(this.data[i][j].UserName);
            return true;
          }
          else{
           
            console.log(this.data[i][j].UserName);
            
          }
}
return false;
}


  }
}
