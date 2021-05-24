import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-selection',
  templateUrl: './package-selection.component.html',
  styleUrls: ['./package-selection.component.css']
})
export class PackageSelectionComponent implements OnInit {

  constructor(private myRouter: Router) { }

  ngOnInit(): void {
  }

  Redirection(){
    this.myRouter.navigate(['/dataconfirm']);

  }
}
