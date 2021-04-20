import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    if (page === 'szamlazzponthu') {
      window.open('https://www.szamlazz.hu', '_blank');
    } else {
      this.router.navigate([page]);
    }
  }

}
