import { Component } from '@angular/core';
import { ModeswitcherService } from 'src/services/modeswitcher.service';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-User-Search-App';

  constructor(private theme: ModeswitcherService) {
    
  }
}
