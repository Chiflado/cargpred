import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projekt-controlling',
  templateUrl: './projekt-controlling.component.html',
  styleUrls: ['./projekt-controlling.component.scss']
})
export class ProjektControllingComponent implements OnInit {

  dataSource = [
    {Termék: 'Anyagtárolás', Bevételezés: '2021.04.04', Profit: '15%', Felelős: 'Kovács István'},
    {Termék: 'Elszállítás', Bevételezés: '2021.03.02', Profit: '34%', Felelős: 'Kiss Katalin'},
    {Termék: 'Nyersanyag feldolgozás', Bevételezés: '2021.01.02', Profit: '-5%', Felelős: 'Novák Péter'},
    {Termék: 'Nyersanyag feldolgozás', Bevételezés: '2021.04.05', Profit: '11%', Felelős: 'Nagy Gábor'},
    {Termék: 'Elszállítás', Bevételezés: '2021.02.12', Profit: '110%', Felelős: 'Nagy Gábor'},
    {Termék: 'Tárolás', Bevételezés: '2021.03.04', Profit: '11%', Felelős: 'Sipos Klára'},
    {Termék: 'Anyagtárolás', Bevételezés: '2021.04.07', Profit: '88%', Felelős: 'Kovács István'},
    {Termék: 'Anyagtárolás', Bevételezés: '2021.04.27', Profit: '0%', Felelős: 'Nagy Gábor'},
    {Termék: 'Nyersanyag feldolgozás', Bevételezés: '2021.04.24', Profit: '7%', Felelős: 'Kovács István'},
    {Termék: 'Elszállítás', Bevételezés: '2021.04.04', Profit: '1%', Felelős: 'Kovács István'},
  ];

  displayedColumns: string[] = ['Termék', 'Bevételezés', 'Profit', 'Felelős'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
