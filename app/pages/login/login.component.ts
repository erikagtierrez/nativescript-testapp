import { Page } from 'ui/page';
import { Component, OnInit } from '@angular/core';
import {topmost} from "ui/frame";
import { Router } from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    providers:[AuthenticationService]
})

export class LoginComponent implements OnInit {
    isLogging=true;
    email="erikagutierrez02@gmail.com";
    password="eri33vgc66";

    constructor(private router: Router, page: Page, private authenticationService: AuthenticationService,
                    private http: Http) {
        page.actionBarHidden=true;
    }

    ngOnInit() {

    }

    submit(){
        if(this.isLogging){
            this.authenticationService.login(this.email, this.password).subscribe(
                data => {
                    console.log("Welcome");
                    console.log(data);
                    this.router.navigate(["/home"]);
                },
                () => {
                    console.log("Unfortunately we were unable to create your account.");
                    alert("Email/Contraseña incorrecta!");
                }
            );
        }else{
            this.authenticationService.register(this.email, this.password).subscribe(
                data => {
                    console.log("Your account was successfully created.");
                    console.log(data);
                    this.toggleDisplay();
                },
                () => {
                    console.log("Unfortunately we were unable to create your account.");
                    alert("Tu cuenta no ha podido ser creada!");
                }
            );
        }
    }

    toggleDisplay() {
    this.isLogging = !this.isLogging;
  }
    
}