import { Component } from '@angular/core';
import { TransService } from './services/trans.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC NG Translate';

  constructor(trans: TransService) {
    trans.use('fr'); // If removed, the default language will apply
  }
}
