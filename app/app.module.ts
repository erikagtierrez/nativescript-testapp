import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        SIDEDRAWER_DIRECTIVES
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        TNSFontIconModule.forRoot({
            'fa': 'font-awesome.css'
        })
        ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
