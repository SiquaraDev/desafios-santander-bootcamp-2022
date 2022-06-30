import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Matheus',
        lastName: 'Siquara',
        age: 21
      },
      {
        firstName: 'Carlos',
        lastName: 'Jesus',
        age: 21
      },
      {
        firstName: 'Dimitri',
        lastName: 'Tratch',
        age: 49
      },
      {
        firstName: 'Victor',
        lastName: 'Hugo',
        age: 37
      },
    ];

    return of(peopleArray)
  }
}
