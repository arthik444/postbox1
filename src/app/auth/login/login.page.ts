import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  otpSent: boolean = false; //OTP sent status

  phoneNumber: string; //set value after OTP is sent

 constructor() {
 }

 ngOnInit() {

 }


 sendOTP() {
 var phNo = (<HTMLInputElement>document.getElementById("phoneNumber")).value;
   this.otpSent= true;
   this.phoneNumber = phNo;
 }

 verifyOTP() {
 var otp = (<HTMLInputElement>document.getElementById("otp")).value;
 }
}
