import { Component, OnInit } from '@angular/core';
import { ModeswitcherService } from 'src/services/modeswitcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modeswitcher: ModeswitcherService) { }

  ngOnInit(): void {
  }

  setTheme(event: Event):void {
    console.log(event);
    
    this.modeswitcher.setMode((event.target as HTMLInputElement).value);
  }
}
