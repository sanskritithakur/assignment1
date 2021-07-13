import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  newChange(): void {
    
   // this.router.navigateByUrl('profile');
}

onSubmit(signInForm:NgForm){
console.log(signInForm.value);
if(signInForm.value.name=="aashi"&&signInForm.value.password=="123"){
  console.log("youhaveloggedin");
  this.router.navigateByUrl('profile');
}else{
  alert("wrong_information");
}
}

}
