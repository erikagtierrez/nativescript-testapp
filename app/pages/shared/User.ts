export class User{
    id: number;
    email: string;
    userType: number;
    createdAt: string;
    image: string;
    token: string;


    constructor(id: number, email: string, userType: number, createdAt: string, image: string, token: string) {
        this.id = id;
        this.email = email;
        this.userType = userType;
        this.createdAt = createdAt;
        this.image = image;
        this.token = token;
    }

    getToken(){
        return this.token;
    }


}