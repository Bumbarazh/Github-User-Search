import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchuserService {

  constructor(private http: HttpClient) { }

  getUser(name: string):Observable<User> {
    if (!name) {
      return this.http.get<User>(`https://api.github.com/users/octocat`);
    }
    return this.http.get<User>(`https://api.github.com/users/${name}`)
  }

}
