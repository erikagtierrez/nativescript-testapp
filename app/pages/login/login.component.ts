import { Page } from 'ui/page';
import { Component, OnInit } from '@angular/core';
import {topmost} from "ui/frame";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    isLogging=true;

    constructor(private router: Router, page: Page) { 
        page.actionBarHidden=true;
    }

    ngOnInit() { 
        
    }

    submit(){
        this.router.navigate(["/home"]);
    }

    toggleDisplay() {
    this.isLogging = !this.isLogging;
  }
    
}