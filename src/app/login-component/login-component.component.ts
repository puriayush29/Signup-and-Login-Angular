import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  value1:boolean = false;
  constructor(private router:Router) { }
onLogin(Form:NgForm)
{
this.value1 = true;
}
onLoginButton()
{
  if(this.value1 == true)
  {
    this.router.navigateByUrl('/LoginPage');
  }
}
  ngOnInit() {
  }

}
