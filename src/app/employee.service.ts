import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { "id" : 1, "name" : "shubham", "age" : 22 },
      { "id" : 2, "name" : "vishal", "age" : 25 },
      { "id" : 3, "name" : "hemant", "age" : 24 },
      { "id" : 4, "name" : "rohit", "age" : 23 }
    ];
  }
}
