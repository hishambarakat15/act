import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userName: string = '';
    passWord: string = '';
    isFormLoaded: boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }


    onClickFormHandler(loginForm: any) {
        this.isFormLoaded = true;
        setTimeout(()=>{
          this.isFormLoaded = false;
          this.router.navigate(["/"]);

        },2000)
    }
}
