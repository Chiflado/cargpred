import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  date = new FormControl(new Date());

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
