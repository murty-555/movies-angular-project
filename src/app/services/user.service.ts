import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'assets/data/db.json'
  constructor(private _http: HttpClient) {}

  getUsers(){
    return this._http.get(this.url)
  }

  updateUsers(newUser:any){
    return this._http.post(this.url,newUser)
  }
}
