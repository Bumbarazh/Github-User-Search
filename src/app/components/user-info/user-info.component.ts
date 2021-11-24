import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import * as moment from 'moment';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() userInfo!: User;

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  parseUserAccDate (date: string): string {
    return moment(date).format('DD MMM YYYY');
  }

  userBlogLink (link: any): string {
    return link ? link : '';
  }

  userTwitterLink (link: any): string {
    return link ? `https://twitter.com/${link}` : '';
  }

  getCompanyName (company: string): string {
    return company.slice(1);
  }

  userCompanyLink (link: any): string {
    let newLink: string;

    if (link) {
      newLink = this.getCompanyName(link);
    } else {
      return '';
    }

    return `https://github.com/${newLink}`;
  }
}
