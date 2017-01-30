import {Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef} from '@angular/core';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import ImageModule = require("ui/image");
import {Router} from "@angular/router";
import pageModule = require("ui/page");
import frameModule = require("ui/frame");import imageModule = require("ui/image");
var imagepicker = require("nativescript-imagepicker");
import {Image} from "ui/image";
import {stringToArrayBuffer} from "@angular/http/src/http_utils";
var frame = require('ui/frame');
var view = require("ui/core/view");
var fs = require("file-system");
var observable = require("data/observable");
var bghttp = require("nativescript-background-http");
var file_system_1 = require("file-system");

@Component({
    moduleId: module.id,
    selector: 'app-uploader',
    templateUrl: 'uploadImage.component.html'
})
export class UploadImageComponent implements OnInit {
    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public pages:Array<Object>;
    public imageSelected:string;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private router: Router) {
        this.pages = [
            {name:"Home"},
            {name:"About"},
            {name:"Contact"}
        ];
    }

    ngOnInit() {
        this.selectImages();
     }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }


    selectImages() {
        var context = imagepicker.create({
            mode: "single"
        });

        context
            .authorize()
            .then(function() {
                return context.present();
            })
            .then(function(selection) {
                console.log("Selection done:");
                selection.forEach(function(selected) {
                    console.log(" - " + selected.uri);
                });
            }).catch(function (e) {
            console.log(e);
        });
    }

    openDrawer() {
        this.drawer.toggleDrawerState();
    }


}

