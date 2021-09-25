import { Component, OnInit } from '@angular/core';
import { CommonService} from "../../services/common.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userProfile : any;
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.userProfile = this.cs.userInfoData
  }

}
