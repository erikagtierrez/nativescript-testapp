import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";  
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";  
import ImageModule = require("ui/image");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
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

    constructor ( 
        private _changeDetectionRef: ChangeDetectorRef) {
        // List all pages here         
         this.pages = [
            {name:"Home"},
            {name:"About"},
            {name:"Contact"}
        ]; 
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public openDrawer() {
        this.drawer.toggleDrawerState();
    }

}
