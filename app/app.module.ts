import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { routes, navigatableComponents } from "./app.routing";
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from "./app.component";
import { LoginComponent } from './pages/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SIDEDRAWER_DIRECTIVES
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        TNSFontIconModule.forRoot({
            'fa': 'font-awesome.css'
        })
        ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
