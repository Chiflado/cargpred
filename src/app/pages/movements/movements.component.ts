import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
