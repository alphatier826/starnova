import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-prime-landing',
  templateUrl: './prime-landing.component.html',
  styleUrls: ['./prime-landing.component.scss']
})
export class PrimeLandingComponent implements OnInit {

  constructor() { }
  items:any;
  tabMenu:any;

  ngOnInit(): void {
    this.items = [
      {
          label: 'Videos', icon: 'pi pi-fw pi-video',
      },
      {
          label: 'Users', icon: 'pi pi-fw pi-users',
      },
      {
          label: 'Events', icon: 'pi pi-fw pi-calendar',
          items: [
              [
                  {
                      label: 'Event 1',
                      items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                  },
                  {
                      label: 'Event 2',
                      items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Event 3',
                      items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                  },
                  {
                      label: 'Event 4',
                      items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Settings', icon: 'pi pi-fw pi-cog',
          items: [
              [
                  {
                      label: 'Setting 1',
                      items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                  },
                  {
                      label: 'Setting 2',
                      items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                  },
                  {
                      label: 'Setting 3',
                      items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                  }
              ],
              [
                  {
                      label: 'Technology 4',
                      items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                  }
              ]
          ]
      }
  ]
  }

  menuClick(event: any){
    console.log("CLK", event);
  }

  activeMenu(event) {
    this.tabMenu = event.target.innerText;
  }

  
}
