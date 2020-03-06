import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    gen: string[] = [];
    firstName: string = '';
    lastName: string = '';
    userName: string = '';
    emaill: string = '';
    passWord: string = '';
    // rePassWord: string = '' ;
    dateOfBirth:string = '';
    adderSS : string = '';
    countrY: string = '';
    citY: string = '';
    phonE: string = '';
    bioo : string = '';
    genderC: string ='';
    isLoadedForm: boolean = false;
  constructor(private router: Router) {
      this.gen = ["Male","Female","Other"];
  }

  ngOnInit() {
  }
    onClickRegisterHandler() {

     this.isLoadedForm = true;
        setTimeout(()=>{
          this.isLoadedForm = false;
            this.router.navigate(["/"]);

        },3000);

    }

}
