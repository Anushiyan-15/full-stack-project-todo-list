import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:5276/api/Users';

  constructor(private http:HttpClient) { }


  getusers(){
    return this.http.get<User[]>(this.url);
  }

  createuser(user:User){
    return this.http.post(this.url,user)
  }

  deleteUser(userId: number) {
    return this.http.delete(this.url + "/" + userId);
  }

  getUser(userId: number) {
    return this.http.get<User>(this.url + "/" + userId);
  }

  updateUser(user: User ,userid:number) {
    return this.http.put(this.url + "/" + userid, user);
  }

}
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address?:address;
}

export interface address{
  id?:number;
  addressline1:string;
  addressline2:string;
  city:string;
}
