import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
