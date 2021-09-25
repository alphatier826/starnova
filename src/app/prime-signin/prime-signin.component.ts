import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService} from '../services/common.service';
import {  ApiUtilService} from '../services/api-util.service';

@Component({
  selector: 'app-prime-signin',
  templateUrl: './prime-signin.component.html',
  styleUrls: ['./prime-signin.component.scss']
})
export class PrimeSigninComponent implements OnInit {

  public username: any;
  public password: any;
  myForm: FormGroup;
  constructor(public router: Router, public cs: CommonService, private apiUtilService: ApiUtilService) {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Sep 25, 2021 20:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;
        if(document.getElementById("days")){
          document.getElementById("days").innerText = Math.floor(distance / (day)).toString(),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)).toString(),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)).toString(),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second).toString();
        }

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)

      var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 60;
if(countdownNumberEl){
    countdownNumberEl.textContent = countdown.toString();
    setInterval(function() {
      countdown = --countdown <= 0 ? 10 : countdown;
      countdownNumberEl.textContent = countdown.toString();
    }, 1000);
  }
  }

  signIn(){
    const payload = this.myForm.value;
    this.apiUtilService.invokeAPI("/serviceEngine/users/login", "POST", payload).subscribe(
      (res: any) => {
        if(res.body.status === "SUCCESS"){
          const userInfo = res.body.userDetails;
          this.cs.userInfoData = userInfo;
          this.cs.updateUserInfo(userInfo);
          this.router.navigateByUrl("/landing");
          sessionStorage.setItem("username",userInfo.type);
        }
      },
      (err: any) => {
        console.log(err);
      });
  }

}
