import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs'
import { catchError} from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { SearchuserService } from 'src/services/searchuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo: User = <User>{};
  noUser:string = '';

  constructor(private userService: SearchuserService) {
    this.userService.getUser('').subscribe(user => {
      this.userInfo = user;
    }
    );
   }

  ngOnInit(): void {
    
  }

  checkObservableOutput(user: any):void {
    if (!user.name) {
    } else {
      this.userInfo = user;
    }
    
  }

  getUser(event:string): void {
    this.userService.getUser(event)
    .pipe(
      catchError(err => {
        this.noUser = 'No results';

        return of(<User>{});
      })
    )
    .subscribe(user => this.checkObservableOutput(user));
  }

  emptyNoUser(event:string): void {
    this.noUser = event;
  }
}
