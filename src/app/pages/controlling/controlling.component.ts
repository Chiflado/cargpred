import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controlling',
  templateUrl: './controlling.component.html',
  styleUrls: ['./controlling.component.scss']
})
export class ControllingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
