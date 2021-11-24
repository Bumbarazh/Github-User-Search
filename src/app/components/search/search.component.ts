import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SearchuserService } from 'src/services/searchuser.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() src = new EventEmitter<string>();
  @Output() emptyStr = new EventEmitter<string>();
  @Input()
  noUser!: string;


  constructor(private searchUser: SearchuserService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    this.src.emit(form.value.nick);
  }

  onInputFocus():void {
    this.emptyStr.emit('')
  }
}
