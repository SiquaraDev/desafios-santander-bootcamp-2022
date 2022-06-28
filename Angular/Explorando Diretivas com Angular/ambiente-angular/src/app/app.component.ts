import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;

  text = '';

  people = [
    {
      name: 'Matheus',
      s_name: 'Siquara'
    },
    {
      name: 'Carlos',
      s_name: 'Jesus'
    },
    {
      name: 'Dimitri',
      s_name: 'Tratch'
    },
    {
      name: 'Victor',
      s_name: 'Hugo'
    },
  ];

  constructor() {

  }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicked(): void {
    this.count = 0;
    this.ngOnInit();
  }
}
