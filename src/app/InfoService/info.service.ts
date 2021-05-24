import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  Destination: String = '';
  fromDate!: Date;
  toDate!: Date;
  Birthday!: Date;

  constructor() { }
}
