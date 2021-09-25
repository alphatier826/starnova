import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public userInfoData: any;

  private menuBreadCrumbSubject$: Subject<any> = new Subject<any>();

  public menuBreadCrumbComponentDetails = this.menuBreadCrumbSubject$.asObservable();

  updateUserInfo(data: any) {​
    this.menuBreadCrumbSubject$.next(data);
  }​

}
