import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-invoice',
  templateUrl: './custom-invoice.component.html',
  styleUrls: ['./custom-invoice.component.scss']
})
export class CustomInvoiceComponent implements OnInit {

  dataSource = [
    {Partner: 'DTD', Kelt: '2021.03.02', Lejárat: '2022.12.01', Kapcsolattartó: 'Kiss Katalin', Típus: 'Import', Aktív: 'Igen'},
    {Partner: 'MÁV', Kelt: '2021.01.02', Lejárat: '2021.06.23', Kapcsolattartó: 'Novák Péter', Típus: 'Import', Aktív: 'Igen'},
    {Partner: 'ÖBB', Kelt: '2021.04.27', Lejárat: '2021.08.31', Kapcsolattartó: 'Nagy Gábor', Típus: 'Export', Aktív: 'Nem'},
    {Partner: 'ÖBB', Kelt: '2021.04.04', Lejárat: '2021.08.11', Kapcsolattartó: 'Kovács István', Típus: 'Tárolás', Aktív: 'Igen'},
    {Partner: 'Gallicoop', Kelt: '2021.04.05', Lejárat: '2021.04.04', Kapcsolattartó: 'Nagy Gábor', Típus: 'Tárolás', Aktív: 'Igen'},
    {Partner: 'MOL', Kelt: '2021.02.12', Lejárat: '2021.09.10', Kapcsolattartó: 'Nagy Gábor', Típus: 'Import', Aktív: 'Nem'},
    {Partner: 'DWA', Kelt: '2021.04.07', Lejárat: '2022.02.22', Kapcsolattartó: 'Kovács István', Típus: 'Megújuló/Import', Aktív: 'Nem'},
    {Partner: 'DCU', Kelt: '2021.04.04', Lejárat: '2021.12.31', Kapcsolattartó: 'Kovács István', Típus: 'Import', Aktív: 'Igen'},
    {Partner: 'MCU', Kelt: '2021.04.24', Lejárat: '2022.01.01', Kapcsolattartó: 'Kovács István', Típus: 'Folyamatos/Export', Aktív: 'Igen'},
    {Partner: 'DTD', Kelt: '2021.03.04', Lejárat: '2022.02.12', Kapcsolattartó: 'Sipos Klára', Típus: 'Export', Aktív: 'Igen'},
  ];

  displayedColumns: string[] = ['Partner', 'Kelt', 'Lejárat', 'Kapcsolattartó', 'Típus', 'Aktív'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatesToPage(page: string) {
    this.router.navigate([page]);
  }

}
