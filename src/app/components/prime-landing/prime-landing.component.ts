import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { CommonService} from '../../services/common.service';
 
@Component({
  selector: 'app-prime-landing',
  templateUrl: './prime-landing.component.html',
  styleUrls: ['./prime-landing.component.scss']
})
export class PrimeLandingComponent implements OnInit {

  constructor(private cs: CommonService) { }
  items:any;
  agent: any;
  tabMenu:any;
  isAdmin:any;

  ngOnInit(): void {
    this.tabMenu = "Profile";
    this.items = [
      {
          label: 'DashBoard', icon: 'pi pi-fw pi-microsoft',
      },
      {
          label: 'Message', icon: 'pi pi-fw pi-envelope',
      },
      {
          label: 'Profile', icon: 'pi pi-fw pi-user', styleClass : 'active',
      },
      {
          label: 'Ticket Sales', icon: 'pi pi-fw pi-bookmark',
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
        label: 'DashBoard', icon: 'pi pi-fw pi-microsoft',
    },
    {
        label: 'Message', icon: 'pi pi-fw pi-envelope',
    },
    {
        label: 'Profile', icon: 'pi pi-fw pi-user', styleClass : 'active',
    },
    {
        label: 'Ticket Sales', icon: 'pi pi-fw pi-bookmark',
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
        label: 'Management', icon: 'pi pi-fw pi-users',
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
if(username && username == "AGENT"){
    this.isAdmin = true;
} else if(username && username == "CUSTOMER") {
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
