import { Component, OnInit,Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  value:boolean = false;
  constructor(private router:Router) { }
  onRegister(form:NgForm)
  {
    this.value = true;
  }
  onRegisterButton()
  {
    if(this.value == true){
    this.router.navigateByUrl('/registerPage');
    }
  }
 ngOnInit() {
  }

}
