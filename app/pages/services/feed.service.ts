import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {User} from "../shared/User";

@Injectable()
export class FeedService {
    public apiUrl= "https://limitless-sierra-24307.herokuapp.com";

    constructor(private http: Http) {
    }

    postImage(image: string, title: string, description: string, user: User){
        console.log("About to register")
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", user.token);
        return this.http.post(
            this.apiUrl + "/images",
            JSON.stringify({
                "image": image,
                "title":title,
                "description":description,
                "userId": user.id
            }),
            { headers: headers }
        ).map(
            (data: Response) => data.json()
        ).catch(this.handleErrors);
    }

    getImages(user: User){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", user.token);
        return this.http.get(this.apiUrl + '/images', { headers: headers } ).map(
            (response: Response) => response.json()
        );
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

}