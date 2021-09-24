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
  agent: any;
  tabMenu:any;
  isAdmin:any;

  ngOnInit(): void {
    this.items = [
      {
          label: 'DashBoard', icon: 'pi pi-fw pi-video',
      },
      {
          label: 'Message', icon: 'pi pi-fw pi-users',
      },
      {
          label: 'Profile', icon: 'pi pi-fw pi-users',
      },
      {
          label: 'Ticket Sales', icon: 'pi pi-fw pi-calendar',
          items: [
              [
                  {
                      label: 'Tickets'
                  },
                  {
                      label: 'Sales Report'
                  },
                  {
                      label: 'Credits'
                  }
              ]
          ]
      }
  ]

  this.agent = [
    {
        label: 'DashBoard', icon: 'pi pi-fw pi-video',
    },
    {
        label: 'Message', icon: 'pi pi-fw pi-users',
    },
    {
        label: 'Profile', icon: 'pi pi-fw pi-users',
    },
    {
        label: 'Ticket Sales', icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Tickets'
                },
                {
                    label: 'Sales Report'
                },
                {
                    label: 'Credits'
                }
            ]
        ]
    },
    {
        label: 'Management', icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Credits'
                },
                {
                    label: 'Agent Reports'
                },
                {
                    label: 'Membership'
                }
            ]
        ]
    }
]

let username = sessionStorage.getItem("username");
if(username && username == "agent"){
    this.isAdmin = true;
} else if(username && username == "customer") {
    this.isAdmin = false;
} else {
    this.isAdmin = false;
}
  }

  menuClick(event: any){
    console.log("CLK", event);
  }

  activeMenu(event) {
    this.tabMenu = event.target.innerText;
  }

  
}
