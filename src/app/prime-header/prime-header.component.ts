import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-prime-header',
  templateUrl: './prime-header.component.html',
  styleUrls: ['./prime-header.component.scss']
})
export class PrimeHeaderComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      //{
      //     label: 'File',
      //     items: [{
      //             label: 'New', 
      //             icon: 'pi pi-fw pi-plus',
      //             items: [
      //                 {label: 'Project'},
      //                 {label: 'Other'},
      //             ]
      //         },
      //         {label: 'Open'},
      //         {label: 'Quit'}
      //     ]
      // },
      // {
      //     label: 'Edit',
      //     icon: 'pi pi-fw pi-pencil',
      //     items: [
      //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      //     ]
      // },
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'News',
      },
      {
        label: 'Number Directory',
      },
      {
        label: 'Results',
      }
   ];
  }

}
