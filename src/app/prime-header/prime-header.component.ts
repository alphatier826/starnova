import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CommonService} from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prime-header',
  templateUrl: './prime-header.component.html',
  styleUrls: ['./prime-header.component.scss']
})
export class PrimeHeaderComponent implements OnInit {

  constructor(private cs: CommonService, private router: Router) { }
  items: MenuItem[];
  public userInfo: any;

  ngOnInit(): void {

    this.items = [
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

    //this.userInfo = this.cs.userInfoData;
    this.cs.menuBreadCrumbComponentDetails.subscribe((data) =>{
      this.userInfo = data;
    })
  }

  logOut(){
    this.userInfo = null;
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

}
