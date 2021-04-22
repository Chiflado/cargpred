import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.scss']
})
export class SapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
