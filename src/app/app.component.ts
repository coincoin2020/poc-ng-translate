import { Component } from '@angular/core';
import { TransService } from 'src/app/services/trans.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC NG Translate';

  constructor(private trans: TransService) {}

  changeLocale(locale: string) {
    this.trans.setLocale(locale);
  }
}
