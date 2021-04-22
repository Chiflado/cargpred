import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  dataSource = [
    {Indulás: '2021.03.02 12:00', Kiindulópont: 'Budapest', Folyamatban: 'Igen', Célállomás: 'München', Érkezés: '',  Késés: '0p'},
    {Indulás: '2021.01.02 11:10', Kiindulópont: 'Szolnok', Folyamatban: 'Nem', Célállomás: 'Belgrád', Érkezés: '2021.06.23',  Késés: '10p'},
    {Indulás: '2021.04.27 13:40', Kiindulópont: 'Miskolc', Folyamatban: 'Igen', Célállomás: 'Nyíregyháza', Érkezés: '',  Késés: '0p'},
    {Indulás: '2021.04.05 04:20', Kiindulópont: 'Debrecen', Folyamatban: 'Nem', Célállomás: 'Berlin', Érkezés: '2021.04.06 04:20',  Késés: '120p'},
    {Indulás: '2021.02.12 22:00', Kiindulópont: 'Budapest', Folyamatban: 'Nem', Célállomás: 'Bratislava', Érkezés: '2021.02.13 02:00',  Késés: '0p'},
    {Indulás: '2021.04.07 02:20', Kiindulópont: 'Szekszárd', Folyamatban: 'Nem', Célállomás: 'Budapest', Érkezés: '', Késés: '0p'},
    {Indulás: '2021.04.04 11:11', Kiindulópont: 'Siófok', Folyamatban: 'Igen', Célállomás: 'Budapest', Érkezés: '',  Késés: '5p'},
    {Indulás: '2021.03.04 12:21', Kiindulópont: 'Békéscsaba', Folyamatban: 'Igen', Célállomás: 'Szarvas', Érkezés: '',  Késés: '0p'},
  ];

  displayedColumns: string[] = ['Indulás', 'Kiindulópont', 'Folyamatban', 'Célállomás', 'Érkezés', 'Késés'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
