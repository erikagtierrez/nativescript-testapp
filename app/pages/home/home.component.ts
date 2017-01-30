import { Component, ViewChild, ChangeDetectorRef, OnInit } from "@angular/core";  
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";  
import ImageModule = require("ui/image");
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    @ViewChild(RadSideDrawerComponent) 
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public pages:Array<Object>;
    public myItems=[
        "Producto 1",
        "Producto 2",
        "Producto 3",
        "Producto 4"        
    ];

    constructor(private _changeDetectionRef: ChangeDetectorRef, private router: Router) {
        // List all pages here         
         this.pages = [
            {name:"Home"},
            {name:"About"},
            {name:"Contact"}
        ]; 
    }
    
    ngOnInit() { }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    openDrawer() {
        this.drawer.toggleDrawerState();
    }

    openUploader(){
        this.router.navigate(["/uploadImage"]);
    }

    exit(){
       this.router.navigate(["/"]);
    }
}