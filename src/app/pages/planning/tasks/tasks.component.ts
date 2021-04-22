import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private router: Router) { }

  dataSource = [
    {Feladat: 'Szállítmány fogadás', Időpont: '2021.04.04', Határidő: '2021.08.11', Felelős: 'Kovács István'},
    {Feladat: 'Szállítmány feladás', Időpont: '2021.03.02', Határidő: '2022.12.01', Felelős: 'Kiss Katalin'},
    {Feladat: 'Engedélyezés', Időpont: '2021.01.02', Határidő: '2021.06.23', Felelős: 'Novák Péter'},
    {Feladat: 'Engedélyezés', Időpont: '2021.04.05', Határidő: '2021.04.04', Felelős: 'Nagy Gábor'},
    {Feladat: 'Szállítmány feladás', Időpont: '2021.02.12', Határidő: '2021.09.10', Felelős: 'Nagy Gábor'},
    {Feladat: 'Szerződás újítás', Időpont: '2021.03.04', Határidő: '2022.02.12', Felelős: 'Sipos Klára'},
    {Feladat: 'Szállítmány fogadás', Időpont: '2021.04.07', Határidő: '2022.02.22', Felelős: 'Kovács István'},
    {Feladat: 'Szállítmány fogadás', Időpont: '2021.04.27', Határidő: '2021.08.31', Felelős: 'Nagy Gábor'},
    {Feladat: 'Engedélyezés', Időpont: '2021.04.24', Határidő: '2022.01.01', Felelős: 'Kovács István'},
    {Feladat: 'Szállítmány feladás', Időpont: '2021.04.04', Határidő: '2021.12.31', Felelős: 'Kovács István'},
  ];

  displayedColumns: string[] = ['Feladat', 'Időpont', 'Határidő', 'Felelős'];

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
