import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthenticationService {
    public apiUrl= "https://limitless-sierra-24307.herokuapp.com";
    constructor(private http: Http) {
    }

    register(email: string, password: string){
        console.log("About to register")
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(
            this.apiUrl + "/users",
            JSON.stringify({
                "email": email,
                "password":password,
                "userType":1
            }),
            { headers: headers }
        ).map(
            (data: Response) => data.json()
        ).catch(this.handleErrors);
    }

    login(email: string, password: string){
        console.log("About to register")
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(
            this.apiUrl + "/auth/local",
            JSON.stringify({
                "email": email,
                "password":password
            }),
            { headers: headers }
        ).map(
            (data: Response) => data.json()
        ).catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

}